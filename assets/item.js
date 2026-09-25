(function () {
  "use strict";

  var LANGS = [
    { key: "hi", label: "हिन्दी" },
    { key: "gu", label: "ગુજરાતી" },
    { key: "sa", label: "संस्कृत" },
    { key: "en", label: "English" },
  ];

  var CATEGORIES = window.CATEGORIES || {};

  function getParam(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }

  var items = window.CONTENT || [];
  var id = getParam("id");
  var item = items.filter(function (x) {
    return x.id === id;
  })[0];

  var titleEl = document.getElementById("title");
  var typeEl = document.getElementById("type-label");
  var tabsEl = document.getElementById("lang-tabs");
  var verseEl = document.getElementById("verse");

  function t(key, fallback) {
    return window.I18n && window.I18n.t ? window.I18n.t(key) : fallback;
  }

  if (!item) {
    function renderNotFound() {
      titleEl.textContent = t("item.notFoundTitle", "Not found");
      verseEl.textContent = t(
        "item.notFoundBody",
        "Sorry, that item could not be found. Go back to the list."
      );
    }
    renderNotFound();
    if (window.I18n && typeof window.I18n.onChange === "function") {
      window.I18n.onChange(renderNotFound);
    }
    return;
  }

  document.title =
    item.title.en || item.title.hi || item.title.gu || "Jain Aradhana";

  function renderTypeLabel() {
    typeEl.textContent =
      window.I18n && window.I18n.category
        ? window.I18n.category(item.type)
        : CATEGORIES[item.type] || item.type;
  }
  renderTypeLabel();

  // Report this specific item to analytics (page path /item/<id> + title), so
  // the most-viewed aartis/stavans show up in GA. No-op if analytics is
  // disabled or consent hasn't been granted.
  if (window.Analytics && typeof window.Analytics.trackItem === "function") {
    window.Analytics.trackItem(item);
  }

  // Languages that actually have text.
  var available = LANGS.filter(function (l) {
    return item.text[l.key] && item.text[l.key].trim();
  });

  // An optional "Meaning" tab, shown only when the item has a meaning.
  // "meaning" may be an array of { term, gloss } rows or a plain string.
  var hasMeaning = Array.isArray(item.meaning)
    ? item.meaning.length > 0
    : !!(item.meaning && item.meaning.trim());

  // Tabs: each language plus (optionally) Meaning. "en" here is a real lang
  // key; the meaning tab uses the special key "meaning".
  var tabs = available.map(function (l) {
    return { key: l.key, label: l.label };
  });
  if (hasMeaning) tabs.push({ key: "meaning", label: t("item.meaningTab", "Meaning") });

  // Persist the chosen language tab per item, so reopening or reloading an
  // item restores the same tab. Stored client-side (localStorage) to keep the
  // site static / GitHub Pages friendly.
  var LANG_STORE_KEY = "jain-aradhana:lang";

  function loadLangMap() {
    try {
      var saved = JSON.parse(localStorage.getItem(LANG_STORE_KEY) || "null");
      if (saved && typeof saved === "object") return saved;
    } catch (e) {}
    return {};
  }

  function saveLang(key) {
    try {
      var map = loadLangMap();
      map[item.id] = key;
      localStorage.setItem(LANG_STORE_KEY, JSON.stringify(map));
    } catch (e) {}
  }

  // Only restore a saved tab if it is still one of the available tabs.
  function restoredTab() {
    var saved = loadLangMap()[item.id];
    var ok = tabs.some(function (t) {
      return t.key === saved;
    });
    return ok ? saved : null;
  }

  var current = restoredTab() || (tabs.length ? tabs[0].key : null);

  function renderMeaning() {
    verseEl.textContent = "";
    verseEl.classList.add("meaning");

    // Structured breakdown: array of { term, gloss }.
    if (Array.isArray(item.meaning)) {
      var list = document.createElement("dl");
      list.className = "meaning-list";
      item.meaning.forEach(function (row) {
        var dt = document.createElement("dt");
        dt.textContent = row.term || "";
        var dd = document.createElement("dd");
        dd.textContent = row.gloss || "";
        list.appendChild(dt);
        list.appendChild(dd);
      });
      verseEl.appendChild(list);
    } else {
      // Plain string meaning.
      var p = document.createElement("p");
      p.className = "meaning-text";
      p.textContent = item.meaning || "";
      verseEl.appendChild(p);
    }
  }

  function show(key) {
    current = key;
    saveLang(key);
    if (key === "meaning") {
      titleEl.textContent =
        item.title.en || item.title.hi || item.title.gu || item.id;
      verseEl.setAttribute("lang", "en");
      renderMeaning();
    } else {
      titleEl.textContent =
        item.title[key] || item.title.hi || item.title.en || item.id;
      verseEl.classList.remove("meaning");
      verseEl.textContent = item.text[key] || "";
      verseEl.setAttribute("lang", key);
    }
    Array.prototype.forEach.call(tabsEl.querySelectorAll(".chip"), function (c) {
      c.classList.toggle("active", c.getAttribute("data-lang") === key);
    });
  }

  tabs.forEach(function (t) {
    var btn = document.createElement("button");
    btn.className = "chip";
    btn.setAttribute("data-lang", t.key);
    btn.textContent = t.label;
    btn.addEventListener("click", function () {
      show(t.key);
    });
    tabsEl.appendChild(btn);
  });

  if (current) show(current);

  // Re-localise the "Meaning" tab label when the interface language changes.
  // The other tabs are content-language names (हिन्दी, English, …) and stay
  // fixed. The header title/type-label follow the content, not the UI, so they
  // are left untouched here.
  if (window.I18n && typeof window.I18n.onChange === "function") {
    var firstRun = true;
    window.I18n.onChange(function () {
      if (firstRun) {
        firstRun = false;
        return;
      }
      var meaningBtn = tabsEl.querySelector('.chip[data-lang="meaning"]');
      if (meaningBtn) meaningBtn.textContent = window.I18n.t("item.meaningTab");
      renderTypeLabel();
    });
  }

  // --- Favorite toggle -----------------------------------------------------
  // Same store as the home page, so a star toggled here shows up in the
  // Favorites filter on the list.
  var FAV_KEY = "jain-aradhana:favorites";

  function loadFavorites() {
    try {
      var saved = JSON.parse(localStorage.getItem(FAV_KEY) || "null");
      if (Array.isArray(saved)) return saved;
    } catch (e) {}
    return [];
  }

  function saveFavorites(list) {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(list));
    } catch (e) {}
  }

  function isFavorite() {
    return loadFavorites().indexOf(item.id) !== -1;
  }

  var favBtn = document.getElementById("fav");

  function syncFav() {
    if (!favBtn) return;
    var on = isFavorite();
    favBtn.textContent = on ? "★" : "☆";
    favBtn.classList.toggle("on", on);
    var lbl = on ? t("fav.remove", "Remove from favorites") : t("fav.add", "Add to favorites");
    favBtn.setAttribute("aria-label", lbl);
    favBtn.setAttribute("title", lbl);
    favBtn.setAttribute("aria-pressed", on ? "true" : "false");
  }

  if (favBtn) {
    favBtn.addEventListener("click", function () {
      var list = loadFavorites();
      var i = list.indexOf(item.id);
      if (i === -1) list.push(item.id);
      else list.splice(i, 1);
      saveFavorites(list);
      syncFav();
    });
    syncFav();
  }

  // --- Share ---------------------------------------------------------------
  // Prefer the native share sheet (mobile); fall back to copying the link.
  var shareBtn = document.getElementById("share");

  // The share button is icon-only, so confirm the copy-link fallback with a
  // brief visual tint plus an updated tooltip/aria-label (for screen readers),
  // then revert to the original "Share" labels.
  function flashShareFeedback(msgKey, fallback) {
    if (!shareBtn) return;
    var originalTitle = shareBtn.getAttribute("title");
    var originalAria = shareBtn.getAttribute("aria-label");
    var msg = t(msgKey, fallback);
    shareBtn.classList.add("copied");
    shareBtn.setAttribute("title", msg);
    shareBtn.setAttribute("aria-label", msg);
    setTimeout(function () {
      shareBtn.classList.remove("copied");
      if (originalTitle !== null) shareBtn.setAttribute("title", originalTitle);
      if (originalAria !== null) shareBtn.setAttribute("aria-label", originalAria);
    }, 1800);
  }

  function copyLink(url) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(url);
    }
    // Legacy fallback for browsers without the async clipboard API.
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement("textarea");
        ta.value = url;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      var url = location.href;
      var shareTitle =
        item.title.en || item.title.hi || item.title.gu || t("share.title", "Share this");

      if (navigator.share) {
        navigator
          .share({ title: shareTitle, text: shareTitle, url: url })
          .catch(function () {
            // User cancelled, or share failed — no action needed.
          });
        return;
      }

      // No native share: copy the link and confirm inline.
      copyLink(url).then(
        function () {
          flashShareFeedback("share.copied", "Link copied");
        },
        function () {
          flashShareFeedback("share.failed", "Couldn’t share");
        }
      );
    });
  }

  // Keep favorite label in sync when the interface language changes.
  if (window.I18n && typeof window.I18n.onChange === "function") {
    window.I18n.onChange(syncFav);
  }

  // Reader text-size controls. The chosen size is a global reading preference,
  // so it is shared across items and restored on reload.
  var SIZE_STORE_KEY = "jain-aradhana:size";
  var size = 21;
  try {
    var savedSize = parseInt(localStorage.getItem(SIZE_STORE_KEY), 10);
    if (savedSize >= 15 && savedSize <= 40) size = savedSize;
  } catch (e) {}

  var inc = document.getElementById("inc");
  var dec = document.getElementById("dec");
  function applySize() {
    verseEl.style.fontSize = size + "px";
    try {
      localStorage.setItem(SIZE_STORE_KEY, String(size));
    } catch (e) {}
  }
  applySize();
  inc.addEventListener("click", function () {
    size = Math.min(size + 2, 40);
    applySize();
  });
  dec.addEventListener("click", function () {
    size = Math.max(size - 2, 15);
    applySize();
  });
})();
