/* Help & FAQ for Jain Aradhana.
 *
 * Adds a floating "Help" button (bottom-left, on every page) that opens an
 * accessible modal dialog containing a set of frequently asked questions as an
 * accordion. All text is UI-localised via window.I18n (English / Hindi /
 * Gujarati) and re-rendered when the interface language changes.
 *
 * Design notes for the 30–70 audience:
 *   - Always-visible labelled button (icon + word), large tap target.
 *   - Plain-language questions and answers, one topic per row.
 *   - Big, finger-friendly accordion rows; only one panel need be open.
 *   - Fully keyboard accessible: Esc closes, focus is trapped in the dialog,
 *     and focus returns to the Help button on close.
 *
 * This script must load after i18n.js.
 */
(function () {
  "use strict";

  // The FAQ list, in display order. Each entry references an I18n question key
  // and answer key. Answers may contain limited inline markup (rendered as
  // HTML), so they are authored as trusted strings in i18n.js only.
  var FAQS = [
    { q: "help.q.install", a: "help.a.install" },
    { q: "help.q.offline", a: "help.a.offline" },
    { q: "help.q.newContent", a: "help.a.newContent" },
    { q: "help.q.privacy", a: "help.a.privacy" },
    { q: "help.q.free", a: "help.a.free" },
    { q: "help.q.language", a: "help.a.language" },
    { q: "help.q.textSize", a: "help.a.textSize" },
    { q: "help.q.favorites", a: "help.a.favorites" },
    { q: "help.q.darkMode", a: "help.a.darkMode" },
  ];

  // Contact link (mirrors the footer "add content" mail link).
  var CONTACT_HREF =
    "mailto:shahkaran1990@gmail.com?subject=Jain%20Aradhana%20%E2%80%94%20Help&body=Hi%20Karan%2C%0A%0AI%20need%20help%20with%3A%0A%0A";

  function t(key, fallback) {
    return window.I18n && window.I18n.t ? window.I18n.t(key) : fallback || key;
  }

  var launcher = null; // the floating Help button
  var overlay = null; // the modal backdrop
  var dialog = null; // the modal dialog box
  var lastFocused = null; // element focused before opening, restored on close

  // --- Build the floating launcher ----------------------------------------
  function buildLauncher() {
    if (launcher || !document.body) return;

    var btn = document.createElement("button");
    btn.id = "help-btn";
    btn.className = "help-btn";
    btn.type = "button";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.setAttribute("aria-label", t("help.open", "Open help and FAQs"));
    btn.title = t("help.open", "Open help and FAQs");

    var icon = document.createElement("span");
    icon.className = "help-btn-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "?";

    var label = document.createElement("span");
    label.className = "help-btn-label";
    label.textContent = t("help.button", "Help");

    btn.appendChild(icon);
    btn.appendChild(label);
    btn.addEventListener("click", open);

    document.body.appendChild(btn);
    launcher = btn;
  }

  // --- Build the dialog (once) --------------------------------------------
  function buildDialog() {
    if (dialog) return;

    overlay = document.createElement("div");
    overlay.className = "help-overlay";
    overlay.hidden = true;
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });

    dialog = document.createElement("div");
    dialog.className = "help-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "help-title");

    // Header: title + close button.
    var header = document.createElement("div");
    header.className = "help-header";

    var title = document.createElement("h2");
    title.id = "help-title";
    title.className = "help-title";
    title.textContent = t("help.title", "Help & FAQs");

    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "help-close";
    closeBtn.setAttribute("aria-label", t("help.close", "Close help"));
    closeBtn.title = t("help.close", "Close help");
    closeBtn.textContent = "\u00d7"; // ×
    closeBtn.addEventListener("click", close);

    header.appendChild(title);
    header.appendChild(closeBtn);

    // Body: intro + accordion + contact.
    var body = document.createElement("div");
    body.className = "help-body";

    var intro = document.createElement("p");
    intro.className = "help-intro";
    intro.textContent = t("help.intro", "");

    var accordion = document.createElement("div");
    accordion.className = "help-accordion";
    FAQS.forEach(function (faq, i) {
      accordion.appendChild(buildFaqRow(faq, i));
    });

    var contact = document.createElement("p");
    contact.className = "help-contact";
    var lead = document.createElement("span");
    lead.className = "help-contact-lead";
    lead.textContent = t("help.contactLead", "Still need help?");
    var link = document.createElement("a");
    link.className = "help-contact-link";
    link.href = CONTACT_HREF;
    link.textContent = t("help.contactLink", "✉️ Contact us");
    contact.appendChild(lead);
    contact.appendChild(document.createTextNode(" "));
    contact.appendChild(link);

    body.appendChild(intro);
    body.appendChild(accordion);
    body.appendChild(contact);

    dialog.appendChild(header);
    dialog.appendChild(body);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    document.addEventListener("keydown", onKeydown);
  }

  function buildFaqRow(faq, index) {
    var row = document.createElement("div");
    row.className = "help-faq";

    var qBtn = document.createElement("button");
    qBtn.type = "button";
    qBtn.className = "help-q";
    qBtn.id = "help-q-" + index;
    qBtn.setAttribute("aria-expanded", "false");
    qBtn.setAttribute("aria-controls", "help-a-" + index);
    qBtn.setAttribute("data-q-key", faq.q);

    var qText = document.createElement("span");
    qText.className = "help-q-text";
    qText.textContent = t(faq.q, "");

    var chevron = document.createElement("span");
    chevron.className = "help-q-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "\u203a"; // ›

    qBtn.appendChild(qText);
    qBtn.appendChild(chevron);

    var panel = document.createElement("div");
    panel.className = "help-a";
    panel.id = "help-a-" + index;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", qBtn.id);
    panel.hidden = true;
    panel.setAttribute("data-a-key", faq.a);
    panel.innerHTML = t(faq.a, "");

    qBtn.addEventListener("click", function () {
      toggleRow(qBtn, panel);
    });

    row.appendChild(qBtn);
    row.appendChild(panel);
    return row;
  }

  function toggleRow(qBtn, panel) {
    var open = qBtn.getAttribute("aria-expanded") === "true";
    qBtn.setAttribute("aria-expanded", open ? "false" : "true");
    panel.hidden = open;
    qBtn.classList.toggle("open", !open);
  }

  // --- Open / close --------------------------------------------------------
  function open() {
    buildDialog();
    lastFocused = document.activeElement;
    overlay.hidden = false;
    // Force reflow before adding the class so the transition runs.
    void overlay.offsetWidth;
    overlay.classList.add("show");
    document.body.classList.add("help-open");
    // Move focus into the dialog (the close button is a safe first stop).
    var closeBtn = dialog.querySelector(".help-close");
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    if (!overlay || overlay.hidden) return;
    overlay.classList.remove("show");
    document.body.classList.remove("help-open");
    var done = function () {
      overlay.hidden = true;
      overlay.removeEventListener("transitionend", done);
    };
    overlay.addEventListener("transitionend", done);
    // Fallback in case transitionend doesn't fire.
    setTimeout(function () {
      if (overlay && !overlay.classList.contains("show")) overlay.hidden = true;
    }, 400);
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    } else if (launcher) {
      launcher.focus();
    }
  }

  function isOpen() {
    return overlay && !overlay.hidden;
  }

  function onKeydown(e) {
    if (!isOpen()) return;
    if (e.key === "Escape" || e.key === "Esc") {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === "Tab") {
      trapFocus(e);
    }
  }

  // Keep Tab focus inside the dialog while it's open.
  function trapFocus(e) {
    var focusables = dialog.querySelectorAll(
      'button, a[href], [tabindex]:not([tabindex="-1"])'
    );
    var visible = Array.prototype.filter.call(focusables, function (el) {
      return el.offsetParent !== null || el === document.activeElement;
    });
    if (!visible.length) return;
    var first = visible[0];
    var last = visible[visible.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // --- Re-localise on language change --------------------------------------
  function relocalise() {
    if (launcher) {
      launcher.setAttribute("aria-label", t("help.open"));
      launcher.title = t("help.open");
      var lbl = launcher.querySelector(".help-btn-label");
      if (lbl) lbl.textContent = t("help.button");
    }
    if (!dialog) return;

    var title = dialog.querySelector(".help-title");
    if (title) title.textContent = t("help.title");

    var closeBtn = dialog.querySelector(".help-close");
    if (closeBtn) {
      closeBtn.setAttribute("aria-label", t("help.close"));
      closeBtn.title = t("help.close");
    }

    var intro = dialog.querySelector(".help-intro");
    if (intro) intro.textContent = t("help.intro");

    Array.prototype.forEach.call(
      dialog.querySelectorAll(".help-q"),
      function (qBtn) {
        var txt = qBtn.querySelector(".help-q-text");
        if (txt) txt.textContent = t(qBtn.getAttribute("data-q-key"));
      }
    );
    Array.prototype.forEach.call(
      dialog.querySelectorAll(".help-a"),
      function (panel) {
        panel.innerHTML = t(panel.getAttribute("data-a-key"));
      }
    );

    var lead = dialog.querySelector(".help-contact-lead");
    if (lead) lead.textContent = t("help.contactLead");
    var link = dialog.querySelector(".help-contact-link");
    if (link) link.textContent = t("help.contactLink");
  }

  function init() {
    buildLauncher();
    if (window.I18n && typeof window.I18n.onChange === "function") {
      var firstRun = true;
      window.I18n.onChange(function () {
        if (firstRun) {
          firstRun = false;
          return;
        }
        relocalise();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose a tiny API (handy for testing / future triggers).
  window.Help = { open: open, close: close };
})();
