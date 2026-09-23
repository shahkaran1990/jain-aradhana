/* PWA glue: registers the service worker, shows an "Install app" button when
   the browser offers installation, and shows a small banner when offline. */
(function () {
  "use strict";

  // 1. Register the service worker.
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function (err) {
        // Registration failing shouldn't break the page.
        console.warn("Service worker registration failed:", err);
      });
    });
  }

  // 2. Offline indicator.
  function ensureOfflineBar() {
    var bar = document.getElementById("offline-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "offline-bar";
      bar.className = "offline-bar";
      bar.textContent = "You’re offline — showing saved content.";
      document.body.appendChild(bar);
    }
    return bar;
  }

  function updateOnlineStatus() {
    var bar = ensureOfflineBar();
    bar.classList.toggle("show", !navigator.onLine);
  }

  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
  document.addEventListener("DOMContentLoaded", updateOnlineStatus);

  // 3. Install prompt (Android / desktop Chrome-family).
  var deferredPrompt = null;

  function makeInstallButton() {
    var btn = document.createElement("button");
    btn.id = "install-btn";
    btn.className = "install-btn";
    btn.type = "button";
    btn.textContent = "⬇︎ Install app";
    btn.hidden = true;
    btn.addEventListener("click", function () {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      deferredPrompt.userChoice.finally(function () {
        deferredPrompt = null;
        btn.hidden = true;
      });
    });
    document.body.appendChild(btn);
    return btn;
  }

  var installBtn = null;

  window.addEventListener("beforeinstallprompt", function (e) {
    // Stop Chrome's mini-infobar; show our own button instead.
    e.preventDefault();
    deferredPrompt = e;
    if (!installBtn) installBtn = makeInstallButton();
    installBtn.hidden = false;
  });

  window.addEventListener("appinstalled", function () {
    deferredPrompt = null;
    if (installBtn) installBtn.hidden = true;
  });

  // 4. iOS install hint.
  //
  // iOS Safari never fires `beforeinstallprompt`, so the button above can't
  // appear on iPhone/iPad. Installing there is manual (Share → Add to Home
  // Screen). Show a one-time hint that explains how; remember dismissal so it
  // doesn't nag on every visit.
  var IOS_HINT_KEY = "jain-aradhana:ios-install-hint";

  function isIos() {
    var ua = window.navigator.userAgent;
    var isIphoneIpad = /iphone|ipad|ipod/i.test(ua);
    // iPadOS 13+ reports as "Macintosh" but is a touch device.
    var isIpadOs =
      /macintosh/i.test(ua) &&
      typeof navigator.maxTouchPoints === "number" &&
      navigator.maxTouchPoints > 1;
    return isIphoneIpad || isIpadOs;
  }

  // Only real Safari supports Add to Home Screen. Chrome/Firefox/Edge on iOS
  // (CriOS/FxiOS/EdgiOS) can't install, so don't mislead those users.
  function isIosSafari() {
    var ua = window.navigator.userAgent;
    return isIos() && !/crios|fxios|edgios/i.test(ua);
  }

  // Already installed (launched from the home screen) → no hint needed.
  function isStandalone() {
    return (
      window.navigator.standalone === true ||
      (window.matchMedia &&
        window.matchMedia("(display-mode: standalone)").matches)
    );
  }

  function hintDismissed() {
    try {
      return localStorage.getItem(IOS_HINT_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function dismissHint() {
    try {
      localStorage.setItem(IOS_HINT_KEY, "1");
    } catch (e) {}
  }

  function showIosHint() {
    if (!isIosSafari() || isStandalone() || hintDismissed()) return;
    if (document.querySelector(".ios-install-hint")) return;

    var bar = document.createElement("div");
    bar.className = "ios-install-hint";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Install this app");

    var text = document.createElement("p");
    text.className = "ios-install-text";
    // The share glyph mirrors the icon in the Safari toolbar.
    text.innerHTML =
      "Install this app: tap the Share button " +
      '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
      ", then <strong>Add to Home Screen</strong>.";

    var close = document.createElement("button");
    close.type = "button";
    close.className = "ios-install-close";
    close.setAttribute("aria-label", "Dismiss");
    close.textContent = "\u00d7"; // ×

    close.addEventListener("click", function () {
      dismissHint();
      bar.classList.remove("show");
      setTimeout(function () {
        if (bar.parentNode) bar.parentNode.removeChild(bar);
      }, 300);
    });

    bar.appendChild(text);
    bar.appendChild(close);
    document.body.appendChild(bar);

    requestAnimationFrame(function () {
      bar.classList.add("show");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showIosHint);
  } else {
    showIosHint();
  }
})();
