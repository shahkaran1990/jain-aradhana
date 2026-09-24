/* Dark / light theme for Jain Aradhana.
 *
 * The theme is stored in localStorage as "light" or "dark". If the user has
 * never chosen, we follow the operating-system preference
 * (prefers-color-scheme) and keep following it until they pick explicitly.
 *
 * To avoid a flash of the wrong theme, the <html data-theme> attribute is set
 * by a tiny inline script in each page's <head> BEFORE this file runs (see
 * index.html / item.html). This module adds the floating toggle button and
 * keeps things in sync, and re-labels itself when the UI language changes.
 *
 * Fully client-side, so it works on the static GitHub Pages host.
 */
(function () {
  "use strict";

  var STORE_KEY = "jain-aradhana:theme";
  var root = document.documentElement;

  function systemPrefersDark() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  // The explicitly chosen theme, or null if the user hasn't chosen one.
  function savedChoice() {
    try {
      var v = localStorage.getItem(STORE_KEY);
      if (v === "light" || v === "dark") return v;
    } catch (e) {}
    return null;
  }

  function effectiveTheme() {
    var choice = savedChoice();
    if (choice) return choice;
    return systemPrefersDark() ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    // Keep the browser UI (address bar, etc.) matching the theme.
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#3a2a1a" : "#b8551f");
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function setTheme(theme) {
    try {
      localStorage.setItem(STORE_KEY, theme);
    } catch (e) {}
    applyTheme(theme);
    syncButton();
  }

  // Make sure the attribute is set even if the inline head script was absent.
  applyTheme(effectiveTheme());

  // --- Floating toggle button ---------------------------------------------
  var btn = null;

  function label() {
    // Label describes the ACTION (where the tap takes you), for a11y.
    var i18n = window.I18n;
    var toDark = i18n ? i18n.t("theme.toggleToDark") : "Switch to dark theme";
    var toLight = i18n ? i18n.t("theme.toggleToLight") : "Switch to light theme";
    return currentTheme() === "dark" ? toLight : toDark;
  }

  function syncButton() {
    if (!btn) return;
    var isDark = currentTheme() === "dark";
    // Show the icon of the theme you'd switch TO.
    btn.textContent = isDark ? "☀️" : "🌙";
    btn.setAttribute("aria-label", label());
    btn.setAttribute("title", label());
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
  }

  function buildButton() {
    if (btn || !document.body) return;
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    btn.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
    placeButton();
    syncButton();
  }

  // Prefer to live inside the language switcher pill so the two controls share
  // one flex row and can never overlap, whatever the switcher's width. The
  // switcher is built by i18n.js on DOMContentLoaded, so it may not exist yet;
  // if it's missing, fall back to the body (fixed-positioned) for now and try
  // to reparent once more after load.
  function placeButton() {
    var switcher = document.querySelector(".lang-switcher");
    if (switcher) {
      btn.classList.add("theme-toggle--inline");
      // Sit first, to the left of the language buttons.
      switcher.insertBefore(btn, switcher.firstChild);
    } else {
      btn.classList.remove("theme-toggle--inline");
      document.body.appendChild(btn);
    }
  }

  // Once everything has loaded, make sure the button ended up inside the
  // switcher (in case the switcher was built after our first placement).
  function reparentIntoSwitcher() {
    if (!btn) return;
    var switcher = document.querySelector(".lang-switcher");
    if (switcher && btn.parentNode !== switcher) {
      btn.classList.add("theme-toggle--inline");
      switcher.insertBefore(btn, switcher.firstChild);
    }
  }
  window.addEventListener("load", reparentIntoSwitcher);

  // Follow OS changes only while the user hasn't made an explicit choice.
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onSystemChange = function () {
      if (!savedChoice()) {
        applyTheme(systemPrefersDark() ? "dark" : "light");
        syncButton();
      }
    };
    if (mq.addEventListener) mq.addEventListener("change", onSystemChange);
    else if (mq.addListener) mq.addListener(onSystemChange);
  }

  // Re-label when the interface language changes.
  if (window.I18n && typeof window.I18n.onChange === "function") {
    window.I18n.onChange(syncButton);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildButton);
  } else {
    buildButton();
  }

  window.Theme = {
    get: currentTheme,
    set: setTheme,
  };
})();
