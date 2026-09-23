(function () {
  "use strict";

  var items = window.CONTENT || [];
  var CATEGORIES = window.CATEGORIES || {};
  var listEl = document.getElementById("list");
  var emptyEl = document.getElementById("empty");
  var searchEl = document.getElementById("search");
  var filtersEl = document.getElementById("filters");

  var state = { query: "", type: "all" };

  function typeLabel(type) {
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

  // Build filter chips: "All" plus one per category that has items,
  // ordered as declared in CATEGORIES.
  function buildFilters() {
    var present = {};
    items.forEach(function (item) {
      present[item.type] = true;
    });

    var chips = [{ type: "all", label: "All" }];
    Object.keys(CATEGORIES).forEach(function (type) {
      if (present[type]) chips.push({ type: type, label: CATEGORIES[type] });
    });

    filtersEl.innerHTML = "";
    chips.forEach(function (chip, i) {
      var btn = document.createElement("button");
      btn.className = "chip" + (i === 0 ? " active" : "");
      btn.setAttribute("data-type", chip.type);
      btn.textContent = chip.label;
      filtersEl.appendChild(btn);
    });
  }

  function render() {
    var q = state.query.trim().toLowerCase();
    var matches = items.filter(function (item) {
      var typeOk = state.type === "all" || item.type === state.type;
      var queryOk = !q || haystack(item).indexOf(q) !== -1;
      return typeOk && queryOk;
    });

    listEl.innerHTML = "";
    emptyEl.hidden = matches.length !== 0;

    matches.forEach(function (item) {
      var a = document.createElement("a");
      a.className = "card";
      a.href = "item.html?id=" + encodeURIComponent(item.id);

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
    render();
  });

  buildFilters();
  render();
})();
