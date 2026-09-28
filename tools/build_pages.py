#!/usr/bin/env python3
"""Generate crawlable static pages for Jain Aradhana.

The site is a buildless static PWA whose content lives in data/content.js and
is rendered client-side. That makes it invisible to search engines: the HTML a
crawler downloads has no verse text and every item shares one URL
(item.html?id=...). This script fixes that for SEO by emitting, for every item:

  item/<id>.html   a real page with a unique <title>, meta description,
                   canonical URL, JSON-LD, and the lyrics baked into the HTML
                   (so crawlers see the text). The existing interactive reader
                   (assets/item.js) still takes over on load and upgrades the
                   page to the tabbed experience.

It also writes:

  sitemap.xml      lists the home page + every item page, for search engines.
  robots.txt       allows crawling and points at the sitemap.

Run from the repo root (or anywhere):

    python3 tools/build_pages.py

No third-party dependencies. It shells out to `node` to read content.js the
same way the pages do (via the window shim), rather than parsing JS with a
regex.
"""

import html
import json
import os
import subprocess
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT_JS = os.path.join(REPO_ROOT, "data", "content.js")
OUT_DIR = os.path.join(REPO_ROOT, "item")

# Language display order for the baked-in (crawlable) verse text. This mirrors
# the tab order in assets/item.js.
LANG_ORDER = [
    ("hi", "हिन्दी", "hi"),
    ("gu", "ગુજરાતી", "gu"),
    ("sa", "संस्कृत", "sa"),
    ("en", "English", "en"),
]

CATEGORY_FALLBACK = {
    "aarti": "Aarti",
    "stavan": "Stavan",
    "stuti": "Stuti",
    "chalisa": "Chalisa",
    "bhajan": "Bhajan",
    "stotra": "Stotra",
    "bhavna": "Bhavna",
    "paath": "Paath",
    "pratikraman": "Pratikraman",
}


def read_content():
    """Read CONTENT + CATEGORIES from data/content.js using Node.

    content.js assigns to window.CONTENT / window.CATEGORIES, so we provide a
    minimal window shim, require the file, and print the data as JSON.
    """
    script = (
        "const path=require('path');"
        "global.window={};"
        "require(process.argv[1]);"
        "process.stdout.write(JSON.stringify("
        "{content: window.CONTENT || [], categories: window.CATEGORIES || {}}"
        "));"
    )
    try:
        out = subprocess.check_output(
            ["node", "-e", script, CONTENT_JS],
            cwd=REPO_ROOT,
        )
    except FileNotFoundError:
        sys.exit("error: `node` not found on PATH — needed to read content.js")
    except subprocess.CalledProcessError as e:
        sys.exit("error: failed to read content.js via node: %s" % e)
    data = json.loads(out)
    return data["content"], data["categories"]


def site_origin():
    """Canonical site origin from the CNAME file, e.g. https://host."""
    cname_path = os.path.join(REPO_ROOT, "CNAME")
    try:
        with open(cname_path, encoding="utf-8") as f:
            host = f.read().strip()
    except OSError:
        host = ""
    if not host:
        return ""
    return "https://" + host


def first(*values):
    for v in values:
        if v and v.strip():
            return v.strip()
    return ""


def primary_title(item):
    t = item.get("title", {})
    return first(t.get("hi"), t.get("gu"), t.get("sa"), t.get("en"), item.get("id"))


def english_title(item):
    t = item.get("title", {})
    return first(t.get("en"), t.get("hi"), t.get("gu"), t.get("sa"), item.get("id"))


def meta_description(item, category_label):
    """A short, plain-language description for search snippets."""
    en = english_title(item)
    native = primary_title(item)
    label = category_label.lower()
    if en and en != native:
        return "%s (%s) — Jain %s lyrics in Hindi, Gujarati and English." % (
            native,
            en,
            label,
        )
    return "%s — Jain %s lyrics in Hindi, Gujarati and English." % (native, label)


def meaning_text(item):
    """Flatten an optional meaning field into plain text for JSON-LD / crawl."""
    m = item.get("meaning")
    if not m:
        return ""
    if isinstance(m, list):
        parts = []
        for row in m:
            term = (row.get("term") or "").strip()
            gloss = (row.get("gloss") or "").strip()
            if term and gloss:
                parts.append("%s: %s" % (term, gloss))
            elif gloss:
                parts.append(gloss)
        return "\n".join(parts)
    return str(m).strip()


def render_verse_blocks(item):
    """Server-rendered, crawlable verse text for every available language.

    item.js hides #verse-static once it takes over, but the text is present in
    the HTML source for crawlers and for no-JS visitors.
    """
    blocks = []
    for key, label, lang_attr in LANG_ORDER:
        text = item.get("text", {}).get(key, "")
        if not text or not text.strip():
            continue
        blocks.append(
            '        <section class="verse-lang">\n'
            '          <h2>%s</h2>\n'
            '          <pre class="verse-text" lang="%s">%s</pre>\n'
            "        </section>"
            % (html.escape(label), lang_attr, html.escape(text))
        )

    meaning = meaning_text(item)
    if meaning:
        blocks.append(
            '        <section class="verse-lang">\n'
            "          <h2>Meaning</h2>\n"
            '          <pre class="verse-text" lang="en">%s</pre>\n'
            "        </section>" % html.escape(meaning)
        )
    return "\n".join(blocks)


def json_ld(item, origin, url, category_label):
    """CreativeWork structured data so search engines understand the page."""
    text_parts = []
    for key, _label, _attr in LANG_ORDER:
        txt = item.get("text", {}).get(key, "")
        if txt and txt.strip():
            text_parts.append(txt.strip())
    data = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": primary_title(item),
        "alternateName": english_title(item),
        "headline": english_title(item),
        "inLanguage": [
            k for k, _l, _a in LANG_ORDER if item.get("text", {}).get(k, "").strip()
        ],
        "genre": category_label,
        "isAccessibleForFree": True,
        "text": "\n\n".join(text_parts),
    }
    if url:
        data["url"] = url
        data["mainEntityOfPage"] = url
    if origin:
        data["isPartOf"] = {
            "@type": "WebSite",
            "name": "Jain Aradhana",
            "url": origin + "/",
        }
    # Ensure non-ASCII (Devanagari/Gujarati) stays literal for readability.
    return json.dumps(data, ensure_ascii=False, indent=2)


PAGE_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <title>{title_tag}</title>
    <meta name="description" content="{description}" />
{canonical}
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{og_title}" />
    <meta property="og:description" content="{description}" />
{og_url}
    <meta property="og:site_name" content="Jain Aradhana" />

    <!-- Apply the saved (or system) theme before paint to avoid a flash. -->
    <script>
      (function () {{
        try {{
          var t = localStorage.getItem("jain-aradhana:theme");
          if (t !== "light" && t !== "dark") {{
            t =
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
          }}
          document.documentElement.setAttribute("data-theme", t);
        }} catch (e) {{}}
      }})();
    </script>

    <!-- PWA -->
    <link rel="manifest" href="../manifest.webmanifest" />
    <meta name="theme-color" content="#b8551f" />
    <link rel="icon" href="../assets/favicon-32.png" sizes="32x32" />
    <link rel="icon" href="../assets/icon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="../assets/apple-touch-icon.png" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Jain Aradhana" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&family=Noto+Sans+Devanagari:wght@400;600;700&family=Noto+Sans+Gujarati:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../assets/style.css" />

    <!-- UI localisation (interface language: English default, Hindi, Gujarati) -->
    <script src="../assets/i18n.js"></script>

    <!-- Dark / light theme toggle -->
    <script src="../assets/theme.js"></script>

    <!-- Analytics: GA4 Measurement ID. Set to "G-XXXXXXXXXX" to disable. -->
    <script>
      window.GA_MEASUREMENT_ID = "G-N3LJ6BT6M7";
    </script>
    <script src="../assets/analytics.js"></script>

    <script type="application/ld+json">
{json_ld}
    </script>
  </head>
  <body data-page="item" data-item-id="{item_id}">
    <header class="site-header">
      <div class="container">
        <a class="back" href="../index.html" data-i18n="item.back">&larr; Back to all</a>
        <h1 id="title">{h1}</h1>
        <p id="type-label">{type_label}</p>
      </div>
    </header>

    <main class="container">
      <article class="detail">
        <div class="lang-tabs" id="lang-tabs"></div>
        <div class="reader-tools">
          <button
            id="dec"
            title="Smaller text"
            data-i18n-title="item.smaller"
            aria-label="Smaller text"
            data-i18n-aria="item.smaller"
          >
            A&minus;
          </button>
          <button
            id="inc"
            title="Larger text"
            data-i18n-title="item.larger"
            aria-label="Larger text"
            data-i18n-aria="item.larger"
          >
            A+
          </button>
          <button
            id="fav"
            class="fav-btn"
            title="Add to favorites"
            data-i18n-title="fav.add"
            aria-label="Add to favorites"
            data-i18n-aria="fav.add"
          >
            &#9734;
          </button>
          <button
            id="share"
            class="share-btn"
            title="Share"
            data-i18n-title="share.label"
            aria-label="Share"
            data-i18n-aria="share.label"
          >
            <svg
              class="share-icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 15V4" />
              <path d="M8 8l4-4 4 4" />
              <path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
            </svg>
          </button>
        </div>
        <div class="verse" id="verse"></div>
        <!-- Crawlable, no-JS fallback content. item.js hides this once the
             interactive reader is ready. -->
        <div class="verse-static" id="verse-static">
{verse_static}
        </div>
      </article>
    </main>

    <footer class="site-footer">
      <div class="container">
        <p class="footer-links">
          <a
            href="mailto:shahkaran1990@gmail.com?subject=Jain%20Aradhana%20%E2%80%94%20Content%20request&amp;body=Hi%20Karan%2C%0A%0AI%27d%20like%20the%20following%20content%20added%20to%20Jain%20Aradhana%3A%0A%0AName%2Ftitle%3A%0AType%20(aarti%2Fstavan%2Fetc.)%3A%0ALanguage(s)%3A%0AText%20or%20source%20link%3A%0A%0AThanks!"
            data-i18n="footer.addContent"
            >&#9993; Contact us to add content</a
          >
          <a
            href="https://github.com/shahkaran1990/jain-aradhana"
            target="_blank"
            rel="noopener"
            data-i18n="footer.github"
            >&#9733; GitHub repo &mdash; add content yourself</a
          >
        </p>
        <p data-i18n="footer.blessing">
          Micchami Dukkadam &middot; Shared with devotion &#128591;
        </p>
        <p class="credit" data-i18n="footer.credit">
          Created by Karan Shah &middot; Built using Kiro
        </p>
      </div>
    </footer>

    <script src="../data/content.js"></script>
    <script src="../assets/item.js"></script>
    <script src="../assets/pwa.js"></script>
    <script src="../assets/help.js"></script>
  </body>
</html>
"""


def render_page(item, origin, categories):
    item_id = item.get("id", "")
    category_label = categories.get(item.get("type"), None) or CATEGORY_FALLBACK.get(
        item.get("type"), item.get("type", "")
    )
    native = primary_title(item)
    en = english_title(item)
    # Keep <title> within ~70 chars: search engines truncate around 60, and the
    # HTML validator caps at 70. Add the site-name suffix only when it fits;
    # otherwise use (and, if needed, trim) the title on its own.
    suffix = " — Jain Aradhana"
    if len(native) + len(suffix) <= 70:
        title_tag = native + suffix
    elif len(native) <= 70:
        title_tag = native
    else:
        title_tag = native[:69].rstrip() + "…"
    og_title = native if native == en else "%s (%s)" % (native, en)
    description = meta_description(item, category_label)

    url = (origin + "/item/" + item_id + ".html") if origin else ""
    canonical = '    <link rel="canonical" href="%s" />' % html.escape(url) if url else ""
    og_url = '    <meta property="og:url" content="%s" />' % html.escape(url) if url else ""

    return PAGE_TEMPLATE.format(
        title_tag=html.escape(title_tag),
        description=html.escape(description),
        canonical=canonical,
        og_title=html.escape(og_title),
        og_url=og_url,
        json_ld=json_ld(item, origin, url, category_label),
        item_id=html.escape(item_id),
        h1=html.escape(native),
        type_label=html.escape(category_label),
        verse_static=render_verse_blocks(item),
    )


def write_sitemap(items, origin):
    """sitemap.xml with the home page + every item page."""
    if not origin:
        print("  (no CNAME — skipping sitemap.xml; it needs absolute URLs)")
        return
    urls = [origin + "/"]
    for item in items:
        urls.append(origin + "/item/" + item.get("id", "") + ".html")
    lines = ['<?xml version="1.0" encoding="UTF-8"?>']
    lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    for u in urls:
        lines.append("  <url><loc>%s</loc></url>" % html.escape(u))
    lines.append("</urlset>")
    lines.append("")
    path = os.path.join(REPO_ROOT, "sitemap.xml")
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print("  wrote sitemap.xml (%d URLs)" % len(urls))


def write_robots(origin):
    lines = ["User-agent: *", "Allow: /"]
    if origin:
        lines.append("Sitemap: %s/sitemap.xml" % origin)
    lines.append("")
    path = os.path.join(REPO_ROOT, "robots.txt")
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print("  wrote robots.txt")


def clean_out_dir():
    """Remove previously generated item/*.html so deleted items don't linger."""
    if not os.path.isdir(OUT_DIR):
        return
    for name in os.listdir(OUT_DIR):
        if name.endswith(".html"):
            os.remove(os.path.join(OUT_DIR, name))


def main():
    items, categories = read_content()
    origin = site_origin()
    print("Building static pages for %d items (origin: %s)" % (len(items), origin or "—"))

    os.makedirs(OUT_DIR, exist_ok=True)
    clean_out_dir()

    seen = set()
    count = 0
    for item in items:
        item_id = item.get("id")
        if not item_id:
            print("  WARNING: item with no id, skipping:", item.get("title"))
            continue
        if item_id in seen:
            print("  WARNING: duplicate id, skipping:", item_id)
            continue
        seen.add(item_id)
        out_path = os.path.join(OUT_DIR, item_id + ".html")
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(render_page(item, origin, categories))
        count += 1

    print("  wrote %d item pages to item/" % count)
    write_sitemap(items, origin)
    write_robots(origin)
    print("Done.")


if __name__ == "__main__":
    main()
