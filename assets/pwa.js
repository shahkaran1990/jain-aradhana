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
})();
