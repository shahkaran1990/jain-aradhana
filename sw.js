/* Service worker for Jain Aradhana.
   Makes the app installable and available offline by caching the app shell,
   content, and Google Fonts. Bump CACHE_VERSION on any release to refresh. */

"use strict";

var CACHE_VERSION = "v22";
var SHELL_CACHE = "jain-shell-" + CACHE_VERSION;
var FONT_CACHE = "jain-fonts-" + CACHE_VERSION;

// Everything the app needs to run offline. Relative URLs so this works both at
// a domain root and under a GitHub Pages subpath (/<repo>/).
var SHELL_ASSETS = [
  "./",
  "index.html",
  "item.html",
  "manifest.webmanifest",
  "assets/style.css",
  "assets/i18n.js",
  "assets/theme.js",
  "assets/home.js",
  "assets/item.js",
  "assets/analytics.js",
  "assets/icon.svg",
  "assets/jain-symbol.svg",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/icon-maskable-512.png",
  "assets/apple-touch-icon.png",
  "assets/favicon-32.png",
  "data/content.js",
];

// Precache the app shell on install.
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(SHELL_CACHE).then(function (cache) {
      return cache.addAll(SHELL_ASSETS);
    })
  );
  // Activate this worker as soon as it finishes installing.
  self.skipWaiting();
});

// Clean up old caches when a new version activates.
self.addEventListener("activate", function (event) {
  var keep = [SHELL_CACHE, FONT_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then(function (names) {
        return Promise.all(
          names.map(function (name) {
            if (keep.indexOf(name) === -1) {
              return caches.delete(name);
            }
          })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

function isFontRequest(url) {
  return (
    url.hostname === "fonts.googleapis.com" ||
    url.hostname === "fonts.gstatic.com"
  );
}

self.addEventListener("fetch", function (event) {
  var req = event.request;

  // Only handle GET.
  if (req.method !== "GET") return;

  var url = new URL(req.url);

  // Google Fonts (CSS + font files): stale-while-revalidate so they work
  // offline after the first load and quietly update when online.
  if (isFontRequest(url)) {
    event.respondWith(
      caches.open(FONT_CACHE).then(function (cache) {
        return cache.match(req).then(function (cached) {
          var network = fetch(req)
            .then(function (res) {
              if (res && (res.ok || res.type === "opaque")) {
                cache.put(req, res.clone());
              }
              return res;
            })
            .catch(function () {
              return cached;
            });
          return cached || network;
        });
      })
    );
    return;
  }

  // Same-origin requests: cache-first, fall back to network, then to a cached
  // page for navigations so the app opens with no connection.
  //
  // For navigations we match ignoring the query string, so URLs like
  // "item.html?id=meri-bhavna" resolve to the cached "item.html" (the page
  // reads the id from location.search at runtime).
  if (url.origin === self.location.origin) {
    var isNavigate = req.mode === "navigate";
    var matchOpts = isNavigate ? { ignoreSearch: true } : undefined;

    event.respondWith(
      caches.match(req, matchOpts).then(function (cached) {
        if (cached) return cached;
        return fetch(req)
          .then(function (res) {
            // Runtime-cache successful same-origin GETs.
            if (res && res.ok) {
              var copy = res.clone();
              caches.open(SHELL_CACHE).then(function (cache) {
                cache.put(req, copy);
              });
            }
            return res;
          })
          .catch(function () {
            if (isNavigate) {
              // Last resort: match the requested page ignoring query, else home.
              return caches.match(req, { ignoreSearch: true }).then(function (
                page
              ) {
                return page || caches.match("index.html");
              });
            }
          });
      })
    );
  }
});

// Allow the page to trigger an immediate activation of an updated worker.
self.addEventListener("message", function (event) {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
