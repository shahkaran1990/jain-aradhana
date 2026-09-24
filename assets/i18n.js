/* UI localisation for Jain Aradhana.
 *
 * This translates the *interface chrome* (headings, buttons, placeholders,
 * footer, PWA banners) — NOT the devotional verse text, which is handled
 * per-item by its own language tabs in item.js.
 *
 * Default UI language is English ("en"); the user can switch to Hindi ("hi")
 * or Gujarati ("gu"). The choice is persisted in localStorage so it survives
 * reloads, and works fully client-side for the static GitHub Pages host.
 *
 * Usage:
 *   - Mark static markup with data-i18n="key" (sets textContent),
 *     data-i18n-placeholder="key", data-i18n-aria="key", or
 *     data-i18n-html="key" (sets innerHTML, for strings with markup).
 *   - Read a string at runtime with window.I18n.t("key").
 *   - React to language changes via window.I18n.onChange(fn) — fn runs once
 *     immediately and again on every switch.
 *
 * This script must load before home.js / item.js / pwa.js.
 */
(function () {
  "use strict";

  var STORE_KEY = "jain-aradhana:ui-lang";
  var DEFAULT_LANG = "en";

  // Languages offered in the UI switcher, in display order. English first so
  // it reads as the default.
  var LANGS = [
    { key: "en", label: "English" },
    { key: "hi", label: "हिन्दी" },
    { key: "gu", label: "ગુજરાતી" },
  ];

  // UI string dictionary. Every key must exist for every language; missing
  // keys fall back to English, then to the key itself.
  var STRINGS = {
    en: {
      "app.name": "Jain Aradhana",
      "app.tagline": "Aarti, Stavan, Stuti, Chalisa, Bhajan, Stotra & more",
      "home.title": "Jain Aradhana — Aarti, Stavan, Stuti & more",
      "home.description":
        "A collection of Jain aartis, stavans, stutis, chalisas, bhajans, stotras and more.",
      "home.searchPlaceholder": "Search by name…",
      "home.searchAria": "Search aartis and stavans",
      "home.filterAll": "All",
      "home.empty": "No matching items found.",
      "item.back": "← Back to all",
      "item.meaningTab": "Meaning",
      "item.smaller": "Smaller text",
      "item.larger": "Larger text",
      "item.notFoundTitle": "Not found",
      "item.notFoundBody":
        "Sorry, that item could not be found. Go back to the list.",
      "footer.addContent": "✉️ Contact us to add content",
      "footer.github": "★ GitHub repo — add content yourself",
      "footer.blessing": "Micchami Dukkadam · Shared with devotion 🙏",
      "footer.credit": "Created by Karan Shah · Built using Kiro",
      "pwa.offline": "You’re offline — showing saved content.",
      "pwa.install": "⬇︎ Install app",
      "pwa.iosHint":
        "Install this app: tap the Share button " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        ", then <strong>Add to Home Screen</strong>.",
      "pwa.iosDismiss": "Dismiss",
      "lang.label": "Language",
      "lang.switcherAria": "Choose interface language",
      "theme.toggleToDark": "Switch to dark theme",
      "theme.toggleToLight": "Switch to light theme",
      "home.filterFavorites": "★ Favorites",
      "home.emptyFavorites": "No favorites yet. Tap the star on any item to save it here.",
      "fav.add": "Add to favorites",
      "fav.remove": "Remove from favorites",
      "share.label": "Share",
      "share.title": "Share this",
      "share.copied": "Link copied",
      "share.failed": "Couldn’t share — link copied instead",
      "cat.aarti": "Aarti",
      "cat.stavan": "Stavan",
      "cat.stuti": "Stuti",
      "cat.chalisa": "Chalisa",
      "cat.bhajan": "Bhajan",
      "cat.stotra": "Stotra",
      "cat.bhavna": "Bhavna",
      "cat.paath": "Paath",
      "cat.pratikraman": "Pratikraman",
    },
    hi: {
      "app.name": "जैन आराधना",
      "app.tagline": "आरती, स्तवन, स्तुति, चालीसा, भजन, स्तोत्र और अधिक",
      "home.title": "जैन आराधना — आरती, स्तवन, स्तुति और अधिक",
      "home.description":
        "जैन आरती, स्तवन, स्तुति, चालीसा, भजन, स्तोत्र और अधिक का संग्रह।",
      "home.searchPlaceholder": "नाम से खोजें…",
      "home.searchAria": "आरती और स्तवन खोजें",
      "home.filterAll": "सभी",
      "home.empty": "कोई मिलान वाली आराधना नहीं मिली।",
      "item.back": "← सभी पर वापस",
      "item.meaningTab": "अर्थ",
      "item.smaller": "छोटा अक्षर",
      "item.larger": "बड़ा अक्षर",
      "item.notFoundTitle": "नहीं मिला",
      "item.notFoundBody":
        "क्षमा करें, वह आराधना नहीं मिली। सूची पर वापस जाएँ।",
      "footer.addContent": "✉️ आराधना जोड़ने के लिए संपर्क करें",
      "footer.github": "★ GitHub रिपॉज़िटरी — स्वयं आराधना जोड़ें",
      "footer.blessing": "मिच्छामि दुक्कडम् · श्रद्धा सहित साझा 🙏",
      "footer.credit": "करण शाह द्वारा निर्मित · Kiro से बनाया गया",
      "pwa.offline": "आप ऑफ़लाइन हैं — सहेजी गई आराधना दिखा रहे हैं।",
      "pwa.install": "⬇︎ ऐप इंस्टॉल करें",
      "pwa.iosHint":
        "यह ऐप इंस्टॉल करें: शेयर बटन दबाएँ " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        ", फिर <strong>Add to Home Screen</strong> चुनें।",
      "pwa.iosDismiss": "बंद करें",
      "lang.label": "भाषा",
      "lang.switcherAria": "इंटरफ़ेस की भाषा चुनें",
      "theme.toggleToDark": "गहरा थीम चुनें",
      "theme.toggleToLight": "हल्का थीम चुनें",
      "home.filterFavorites": "★ पसंदीदा",
      "home.emptyFavorites": "अभी कोई पसंदीदा नहीं। किसी भी आराधना पर तारा दबाकर यहाँ सहेजें।",
      "fav.add": "पसंदीदा में जोड़ें",
      "fav.remove": "पसंदीदा से हटाएँ",
      "share.label": "साझा करें",
      "share.title": "इसे साझा करें",
      "share.copied": "लिंक कॉपी हो गया",
      "share.failed": "साझा नहीं हो सका — लिंक कॉपी कर दिया",
      "cat.aarti": "आरती",
      "cat.stavan": "स्तवन",
      "cat.stuti": "स्तुति",
      "cat.chalisa": "चालीसा",
      "cat.bhajan": "भजन",
      "cat.stotra": "स्तोत्र",
      "cat.bhavna": "भावना",
      "cat.paath": "पाठ",
      "cat.pratikraman": "प्रतिक्रमण",
    },
    gu: {
      "app.name": "જૈન આરાધના",
      "app.tagline": "આરતી, સ્તવન, સ્તુતિ, ચાલીસા, ભજન, સ્તોત્ર અને વધુ",
      "home.title": "જૈન આરાધના — આરતી, સ્તવન, સ્તુતિ અને વધુ",
      "home.description":
        "જૈન આરતી, સ્તવન, સ્તુતિ, ચાલીસા, ભજન, સ્તોત્ર અને વધુનો સંગ્રહ.",
      "home.searchPlaceholder": "નામથી શોધો…",
      "home.searchAria": "આરતી અને સ્તવન શોધો",
      "home.filterAll": "બધું",
      "home.empty": "કોઈ મેળ ખાતી આરાધના મળી નથી.",
      "item.back": "← બધા પર પાછા",
      "item.meaningTab": "અર્થ",
      "item.smaller": "નાનું અક્ષર",
      "item.larger": "મોટું અક્ષર",
      "item.notFoundTitle": "મળ્યું નથી",
      "item.notFoundBody":
        "માફ કરશો, તે આરાધના મળી શકી નથી. યાદી પર પાછા જાઓ.",
      "footer.addContent": "✉️ આરાધના ઉમેરવા સંપર્ક કરો",
      "footer.github": "★ GitHub રિપોઝિટરી — જાતે આરાધના ઉમેરો",
      "footer.blessing": "મિચ્છામિ દુક્કડમ્ · શ્રદ્ધા સહિત વહેંચ્યું 🙏",
      "footer.credit": "કરણ શાહ દ્વારા બનાવેલ · Kiro થી બનાવ્યું",
      "pwa.offline": "તમે ઑફલાઇન છો — સાચવેલી આરાધના બતાવીએ છીએ.",
      "pwa.install": "⬇︎ ઍપ ઇન્સ્ટૉલ કરો",
      "pwa.iosHint":
        "આ ઍપ ઇન્સ્ટૉલ કરો: શેર બટન દબાવો " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        ", પછી <strong>Add to Home Screen</strong> પસંદ કરો.",
      "pwa.iosDismiss": "બંધ કરો",
      "lang.label": "ભાષા",
      "lang.switcherAria": "ઇન્ટરફેસની ભાષા પસંદ કરો",
      "theme.toggleToDark": "ડાર્ક થીમ પસંદ કરો",
      "theme.toggleToLight": "લાઇટ થીમ પસંદ કરો",
      "home.filterFavorites": "★ મનપસંદ",
      "home.emptyFavorites": "હજી કોઈ મનપસંદ નથી. કોઈપણ આરાધના પરનો તારો દબાવીને અહીં સાચવો.",
      "fav.add": "મનપસંદમાં ઉમેરો",
      "fav.remove": "મનપસંદમાંથી દૂર કરો",
      "share.label": "શેર કરો",
      "share.title": "આ શેર કરો",
      "share.copied": "લિંક કૉપિ થઈ",
      "share.failed": "શેર ન થઈ શક્યું — લિંક કૉપિ કરી",
      "cat.aarti": "આરતી",
      "cat.stavan": "સ્તવન",
      "cat.stuti": "સ્તુતિ",
      "cat.chalisa": "ચાલીસા",
      "cat.bhajan": "ભજન",
      "cat.stotra": "સ્તોત્ર",
      "cat.bhavna": "ભાવના",
      "cat.paath": "પાઠ",
      "cat.pratikraman": "પ્રતિક્રમણ",
    },
  };

  function isSupported(lang) {
    return !!STRINGS[lang];
  }

  function loadLang() {
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (saved && isSupported(saved)) return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  var current = loadLang();
  var listeners = [];

  // Translate a key for the current language, with graceful fallbacks.
  function t(key) {
    var table = STRINGS[current] || STRINGS[DEFAULT_LANG];
    if (table && table[key] != null) return table[key];
    if (STRINGS[DEFAULT_LANG][key] != null) return STRINGS[DEFAULT_LANG][key];
    return key;
  }

  // Apply translations to any element carrying a data-i18n* attribute within
  // the given root (defaults to the whole document).
  function apply(root) {
    root = root || document;

    each(root.querySelectorAll("[data-i18n]"), function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    each(root.querySelectorAll("[data-i18n-html]"), function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    each(root.querySelectorAll("[data-i18n-placeholder]"), function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    each(root.querySelectorAll("[data-i18n-aria]"), function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    each(root.querySelectorAll("[data-i18n-title]"), function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });

    // Keep the document language in sync for a11y / screen readers.
    document.documentElement.setAttribute("lang", current);
  }

  function each(nodeList, fn) {
    Array.prototype.forEach.call(nodeList, fn);
  }

  function notify() {
    listeners.forEach(function (fn) {
      try {
        fn(current);
      } catch (e) {}
    });
  }

  function setLang(lang) {
    if (!isSupported(lang) || lang === current) return;
    current = lang;
    try {
      localStorage.setItem(STORE_KEY, lang);
    } catch (e) {}
    apply(document);
    syncSwitcher();
    notify();
  }

  // Register a callback that runs immediately and on every language change.
  // Consumers (home.js, item.js, pwa.js) use this to re-render dynamic text.
  function onChange(fn) {
    if (typeof fn !== "function") return;
    listeners.push(fn);
    try {
      fn(current);
    } catch (e) {}
  }

  // --- Floating language switcher -----------------------------------------
  var switcherEl = null;

  function buildSwitcher() {
    if (switcherEl || !document.body) return;

    var wrap = document.createElement("div");
    wrap.className = "lang-switcher";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", t("lang.switcherAria"));

    LANGS.forEach(function (l) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lang-btn";
      btn.setAttribute("data-lang", l.key);
      btn.setAttribute("lang", l.key);
      btn.textContent = l.label;
      btn.addEventListener("click", function () {
        setLang(l.key);
      });
      wrap.appendChild(btn);
    });

    document.body.appendChild(wrap);
    switcherEl = wrap;
    syncSwitcher();
  }

  function syncSwitcher() {
    if (!switcherEl) return;
    switcherEl.setAttribute("aria-label", t("lang.switcherAria"));
    each(switcherEl.querySelectorAll(".lang-btn"), function (btn) {
      var active = btn.getAttribute("data-lang") === current;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  // Localised label for a content category (e.g. "aarti" → "Aarti" / "आरती" /
  // "આરતી"). Resolution order: the "cat.<type>" string for the current
  // language, then the English CATEGORIES map from content.js (so a category
  // added there without a translation still shows a sensible label), then the
  // raw type key.
  function category(type) {
    if (!type) return "";
    var key = "cat." + type;
    var table = STRINGS[current] || STRINGS[DEFAULT_LANG];
    if (table && table[key] != null) return table[key];
    var cats = window.CATEGORIES || {};
    if (cats[type] != null) return cats[type];
    if (STRINGS[DEFAULT_LANG][key] != null) return STRINGS[DEFAULT_LANG][key];
    return type;
  }

  function init() {
    apply(document);
    buildSwitcher();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.I18n = {
    t: t,
    category: category,
    apply: apply,
    setLang: setLang,
    getLang: function () {
      return current;
    },
    onChange: onChange,
    langs: LANGS.slice(),
  };
})();
