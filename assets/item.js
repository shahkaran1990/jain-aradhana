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

  if (!item) {
    titleEl.textContent = "Not found";
    verseEl.textContent =
      "Sorry, that item could not be found. Go back to the list.";
    return;
  }

  document.title =
    item.title.en || item.title.hi || item.title.gu || "Jain Aarti & Stavan";
  typeEl.textContent = CATEGORIES[item.type] || item.type;

  // Languages that actually have text.
  var available = LANGS.filter(function (l) {
    return item.text[l.key] && item.text[l.key].trim();
  });

  var current = available.length ? available[0].key : null;

  function show(langKey) {
    current = langKey;
    titleEl.textContent =
      item.title[langKey] || item.title.hi || item.title.en || item.id;
    verseEl.textContent = item.text[langKey] || "";
    verseEl.setAttribute("lang", langKey);
    Array.prototype.forEach.call(tabsEl.querySelectorAll(".chip"), function (c) {
      c.classList.toggle("active", c.getAttribute("data-lang") === langKey);
    });
  }

  available.forEach(function (l) {
    var btn = document.createElement("button");
    btn.className = "chip";
    btn.setAttribute("data-lang", l.key);
    btn.textContent = l.label;
    btn.addEventListener("click", function () {
      show(l.key);
    });
    tabsEl.appendChild(btn);
  });

  if (current) show(current);

  // Reader text-size controls.
  var size = 21;
  var inc = document.getElementById("inc");
  var dec = document.getElementById("dec");
  function applySize() {
    verseEl.style.fontSize = size + "px";
  }
  inc.addEventListener("click", function () {
    size = Math.min(size + 2, 40);
    applySize();
  });
  dec.addEventListener("click", function () {
    size = Math.max(size - 2, 15);
    applySize();
  });
})();
