(function () {
  "use strict";

  var items = window.CONTENT || [];
  var CATEGORIES = window.CATEGORIES || {};
  var listEl = document.getElementById("list");
  var emptyEl = document.getElementById("empty");
  var searchEl = document.getElementById("search");
  var filtersEl = document.getElementById("filters");

  function t(key, fallback) {
    return window.I18n && window.I18n.t ? window.I18n.t(key) : fallback;
  }

  // Persisted UI state (search query + active category filter). Kept in
  // localStorage so a reload restores where the user was. Fully client-side,
  // so it works on a static GitHub Pages host.
  var STORE_KEY = "jain-aradhana:home";

  // Favorites are stored separately (a list of item ids) so they survive
  // independently of the search/filter state. Shared with item.js via the
  // same localStorage key.
  var FAV_KEY = "jain-aradhana:favorites";

  function loadFavorites() {
    try {
      var saved = JSON.parse(localStorage.getItem(FAV_KEY) || "null");
      if (Array.isArray(saved)) {
        // Keep only ids that still exist in the content.
        var known = {};
        items.forEach(function (it) {
          known[it.id] = true;
        });
        return saved.filter(function (id) {
          return known[id];
        });
      }
    } catch (e) {}
    return [];
  }

  var favorites = loadFavorites();

  function saveFavorites() {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    } catch (e) {}
  }

  function isFavorite(id) {
    return favorites.indexOf(id) !== -1;
  }

  function toggleFavorite(id) {
    var i = favorites.indexOf(id);
    if (i === -1) favorites.push(id);
    else favorites.splice(i, 1);
    saveFavorites();
  }

  function loadState() {
    var fallback = { query: "", type: "all" };
    try {
      var saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
      if (saved && typeof saved === "object") {
        return {
          query: typeof saved.query === "string" ? saved.query : "",
          type: typeof saved.type === "string" ? saved.type : "all",
        };
      }
    } catch (e) {}
    return fallback;
  }

  function saveState() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  var state = loadState();

  function typeLabel(type) {
    if (window.I18n && window.I18n.category) return window.I18n.category(type);
    return CATEGORIES[type] || type;
  }

  // A single searchable string per item across all languages + id.
  function haystack(item) {
    var t = item.title || {};
    return [t.gu, t.hi, t.sa, t.en, item.id]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  }

  // Prefer a title that exists; order: Hindi, Gujarati, Sanskrit, English.
  function primaryTitle(item) {
    var t = item.title || {};
    return t.hi || t.gu || t.sa || t.en || item.id;
  }

  // Show the romanised English name (if any) as a secondary line.
  function subtitle(item) {
    var t = item.title || {};
    return t.en || "";
  }

  // Build filter chips: "All", "Favorites", then one per category that has
  // items, ordered as declared in CATEGORIES.
  function buildFilters() {
    var present = {};
    items.forEach(function (item) {
      present[item.type] = true;
    });

    var chips = [
      { type: "all", label: t("home.filterAll", "All") },
      { type: "favorites", label: t("home.filterFavorites", "★ Favorites") },
    ];
    Object.keys(CATEGORIES).forEach(function (type) {
      if (present[type]) chips.push({ type: type, label: typeLabel(type) });
    });

    // If the persisted filter no longer matches an available chip,
    // fall back to "all" so nothing looks stuck on an empty filter.
    var known = chips.some(function (chip) {
      return chip.type === state.type;
    });
    if (!known) state.type = "all";

    filtersEl.innerHTML = "";
    chips.forEach(function (chip) {
      var btn = document.createElement("button");
      btn.className = "chip" + (chip.type === state.type ? " active" : "");
      btn.setAttribute("data-type", chip.type);
      btn.textContent = chip.label;
      filtersEl.appendChild(btn);
    });
  }

  function matchesFilter(item) {
    if (state.type === "all") return true;
    if (state.type === "favorites") return isFavorite(item.id);
    return item.type === state.type;
  }

  // A star toggle button placed on each card. Clicking it favorites/unfavorites
  // the item without navigating into it.
  function makeStar(item) {
    var star = document.createElement("button");
    star.type = "button";
    star.className = "fav-star" + (isFavorite(item.id) ? " on" : "");
    star.textContent = isFavorite(item.id) ? "★" : "☆";
    var lbl = isFavorite(item.id)
      ? t("fav.remove", "Remove from favorites")
      : t("fav.add", "Add to favorites");
    star.setAttribute("aria-label", lbl);
    star.setAttribute("title", lbl);
    star.setAttribute("aria-pressed", isFavorite(item.id) ? "true" : "false");
    star.addEventListener("click", function (e) {
      // The star lives inside the card <a>; don't follow the link.
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(item.id);
      // Re-render so the star, and the Favorites view if active, stay correct.
      render();
    });
    return star;
  }

  function render() {
    var q = state.query.trim().toLowerCase();
    var matches = items.filter(function (item) {
      var queryOk = !q || haystack(item).indexOf(q) !== -1;
      return matchesFilter(item) && queryOk;
    });

    listEl.innerHTML = "";
    emptyEl.hidden = matches.length !== 0;
    // A friendlier message when the empty Favorites view is showing.
    if (matches.length === 0) {
      emptyEl.textContent =
        state.type === "favorites" && !q
          ? t("home.emptyFavorites", "No favorites yet.")
          : t("home.empty", "No matching items found.");
    }

    matches.forEach(function (item) {
      var a = document.createElement("a");
      a.className = "card";
      a.href = "item.html?id=" + encodeURIComponent(item.id);

      a.appendChild(makeStar(item));

      var badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = typeLabel(item.type);

      var h2 = document.createElement("h2");
      h2.textContent = primaryTitle(item);

      a.appendChild(badge);
      a.appendChild(h2);

      var sub = subtitle(item);
      if (sub) {
        var p = document.createElement("p");
        p.className = "subtitle";
        p.textContent = sub;
        a.appendChild(p);
      }

      var li = document.createElement("li");
      li.appendChild(a);
      listEl.appendChild(li);
    });
  }

  searchEl.addEventListener("input", function (e) {
    state.query = e.target.value;
    saveState();
    render();
  });

  filtersEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    state.type = btn.getAttribute("data-type");
    Array.prototype.forEach.call(filtersEl.querySelectorAll(".chip"), function (
      c
    ) {
      c.classList.toggle("active", c === btn);
    });
    saveState();
    render();
  });

  buildFilters();
  // Restore the search box to the persisted query.
  searchEl.value = state.query;
  render();

  // Re-localise the dynamically-built UI (filter chips, stars, empty message)
  // whenever the interface language changes. onChange fires once immediately
  // too, but the initial build above already covered that; re-running is cheap
  // and keeps a single source of truth.
  if (window.I18n && typeof window.I18n.onChange === "function") {
    var firstRun = true;
    window.I18n.onChange(function () {
      if (firstRun) {
        firstRun = false;
        return;
      }
      buildFilters();
      render();
    });
  }
})();
