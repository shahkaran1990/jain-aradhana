/* Google Analytics 4 with Consent Mode + a lightweight consent banner.
 *
 * Privacy model:
 *   - GA4 Consent Mode is initialized with analytics_storage = "denied", so
 *     nothing is measured until the visitor opts in.
 *   - A first-visit banner offers Accept / Decline. The choice is stored in
 *     localStorage; the banner never reappears once a choice is made.
 *   - gtag.js is only loaded after the visitor accepts. If they decline (or
 *     never choose), the GA script is never fetched at all.
 *
 * Config:
 *   Set your GA4 Measurement ID once, on the page, before this script runs:
 *     <script>window.GA_MEASUREMENT_ID = "G-XXXXXXXXXX";</script>
 *   Leave the placeholder in place to disable analytics entirely.
 */
(function () {
  "use strict";

  var MEASUREMENT_ID = window.GA_MEASUREMENT_ID || "";
  var PLACEHOLDER = "G-XXXXXXXXXX";
  var CONSENT_KEY = "jain-aradhana:analytics-consent"; // "granted" | "denied"

  // gtag.js won't do anything useful without a real ID; skip the whole thing
  // (including the banner) until one is configured.
  var enabled = MEASUREMENT_ID && MEASUREMENT_ID !== PLACEHOLDER;

  // The dataLayer / gtag shim must exist before the GA script loads so any
  // early calls are queued.
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  function readConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {}
  }

  // Default everything to denied under Consent Mode until the visitor opts in.
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });

  var scriptLoaded = false;

  // Load gtag.js and start measuring. Safe to call more than once.
  function startAnalytics() {
    if (scriptLoaded || !enabled) return;
    scriptLoaded = true;

    var s = document.createElement("script");
    s.async = true;
    s.src =
      "https://www.googletagmanager.com/gtag/js?id=" +
      encodeURIComponent(MEASUREMENT_ID);
    document.head.appendChild(s);

    gtag("js", new Date());
    // We send page_view manually so item.html can report the specific item.
    gtag("config", MEASUREMENT_ID, { send_page_view: false });

    sendCurrentPageView();
  }

  // Build the page-view payload. On the detail page we report the specific
  // item as /item/<id> with its title, so the most-viewed aartis/stavans are
  // visible in GA. Anything set on window.GA_PAGE_VIEW overrides the default.
  function currentPageView() {
    if (window.GA_PAGE_VIEW) return window.GA_PAGE_VIEW;
    return {
      page_path: location.pathname + location.search,
      page_title: document.title,
      page_location: location.href,
    };
  }

  var pageViewSent = false;

  function sendCurrentPageView() {
    if (!enabled || readConsent() !== "granted" || pageViewSent) return;
    pageViewSent = true;
    gtag("event", "page_view", currentPageView());
  }

  // Called by item.js once it has resolved the specific item, so the detail
  // page is tracked as its own "page" keyed by item id + title.
  function trackItem(item) {
    if (!item) return;
    var title =
      (item.title &&
        (item.title.en || item.title.hi || item.title.gu || item.title.sa)) ||
      item.id;
    window.GA_PAGE_VIEW = {
      page_path: "/item/" + item.id,
      page_title: title,
      page_location: location.href,
      item_id: item.id,
      item_type: item.type || "",
    };
    // If consent is already granted and GA is up, this page_view may not have
    // been sent yet (we hold it until the item is known). Send it now.
    pageViewSent = false;
    sendCurrentPageView();
  }

  function grant() {
    saveConsent("granted");
    gtag("consent", "update", { analytics_storage: "granted" });
    startAnalytics();
  }

  function deny() {
    saveConsent("denied");
    gtag("consent", "update", { analytics_storage: "denied" });
  }

  // ---- Consent banner --------------------------------------------------

  function buildBanner() {
    // Don't stack multiple banners if the preferences link is clicked twice.
    if (document.querySelector(".consent-bar")) return;

    var bar = document.createElement("div");
    bar.className = "consent-bar";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-live", "polite");
    bar.setAttribute("aria-label", "Analytics consent");

    var msg = document.createElement("p");
    msg.className = "consent-text";
    msg.textContent =
      "We use privacy-friendly analytics to see which prayers are read most. " +
      "No ads, no personal data. You can decline.";

    var actions = document.createElement("div");
    actions.className = "consent-actions";

    var decline = document.createElement("button");
    decline.type = "button";
    decline.className = "consent-btn consent-decline";
    decline.textContent = "Decline";

    var accept = document.createElement("button");
    accept.type = "button";
    accept.className = "consent-btn consent-accept";
    accept.textContent = "Accept";

    function close() {
      bar.classList.remove("show");
      // Remove after the slide-out transition.
      setTimeout(function () {
        if (bar.parentNode) bar.parentNode.removeChild(bar);
      }, 300);
    }

    decline.addEventListener("click", function () {
      deny();
      close();
    });
    accept.addEventListener("click", function () {
      grant();
      close();
    });

    actions.appendChild(decline);
    actions.appendChild(accept);
    bar.appendChild(msg);
    bar.appendChild(actions);
    document.body.appendChild(bar);

    // Trigger the slide-in on the next frame.
    requestAnimationFrame(function () {
      bar.classList.add("show");
    });
  }

  function init() {
    if (!enabled) return;

    var choice = readConsent();
    if (choice === "granted") {
      // Returning visitor who already opted in: measure without a banner.
      gtag("consent", "update", { analytics_storage: "granted" });
      startAnalytics();
    } else if (choice === "denied") {
      // Respect their previous decline, no banner.
    } else {
      // First visit: ask.
      buildBanner();
    }
  }

  // Let a visitor revisit their choice at any time (e.g. from a footer link).
  // Reopens the same banner regardless of a previous accept/decline.
  function openPreferences() {
    if (!enabled) return;
    buildBanner();
  }

  // Add an "Analytics preferences" link into each page footer, so the choice
  // isn't a one-time decision. Only shown when analytics is actually enabled
  // (a real Measurement ID is configured).
  function addFooterLink() {
    if (!enabled) return;
    if (document.getElementById("analytics-prefs-link")) return;

    var footer = document.querySelector(".site-footer .container");
    if (!footer) return;

    var p = document.createElement("p");
    p.className = "credit";

    var link = document.createElement("a");
    link.id = "analytics-prefs-link";
    link.href = "#";
    link.textContent = "Analytics preferences";
    link.addEventListener("click", function (e) {
      e.preventDefault();
      openPreferences();
    });

    p.appendChild(link);
    footer.appendChild(p);
  }

  // Public surface used by item.js and the footer link.
  window.Analytics = {
    trackItem: trackItem,
    openPreferences: openPreferences,
  };

  function boot() {
    init();
    addFooterLink();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
