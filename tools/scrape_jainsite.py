#!/usr/bin/env python3
"""
Scrape Gujarati stavan lyrics from jainsite.com.

Site structure (WordPress, server-rendered HTML — no JS/API needed):
  master category : /lcategories/jain-lyrics-stavan/           (+ /page/N/)
    -> lists sub-categories (/lcategories/<slug>/) AND items
  sub category    : /lcategories/<slug>/                        (+ /page/N/)
    -> lists items (/lyrics/<slug>/)
  item page       : /lyrics/<slug>/
    -> <h1 class="entry-title"> + <div class="entry-content clearfix">

Politeness: one request at a time, DELAY between requests, on-disk HTML cache
so re-runs never re-hit the server, real User-Agent.

Usage:
  pip install requests beautifulsoup4
  python3 scrape_jainsite.py                 # scrape everything under jain-lyrics-stavan
  python3 scrape_jainsite.py --limit 5       # only first 5 items (a quick test)
  python3 scrape_jainsite.py --out stavans.json
"""

import argparse
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE = "https://jainsite.com"
ROOT_CATEGORY = "/lcategories/jain-lyrics-stavan/"
CACHE_DIR = Path(__file__).parent / ".cache"
DELAY_SECONDS = 1.0          # be kind: pause between network requests
USER_AGENT = "jain-aradhana-scraper/1.0 (personal devotional archive; contact: you@example.com)"

session = requests.Session()
session.headers.update({"User-Agent": USER_AGENT})


def cache_path(url: str) -> Path:
    slug = re.sub(r"[^a-zA-Z0-9]+", "_", urlparse(url).path).strip("_") or "index"
    return CACHE_DIR / f"{slug}.html"


def fetch(url: str) -> str:
    """Fetch a URL, using the on-disk cache when available."""
    cp = cache_path(url)
    if cp.exists():
        return cp.read_text(encoding="utf-8")
    time.sleep(DELAY_SECONDS)
    print(f"  GET {url}", file=sys.stderr)
    resp = session.get(url, timeout=30)
    resp.raise_for_status()
    resp.encoding = resp.apparent_encoding or "utf-8"
    CACHE_DIR.mkdir(exist_ok=True)
    cp.write_text(resp.text, encoding="utf-8")
    return resp.text


def links_matching(html: str, prefix: str) -> list[str]:
    soup = BeautifulSoup(html, "html.parser")
    out = []
    for a in soup.select("a[href]"):
        href = urljoin(BASE, a["href"])
        if href.startswith(BASE + prefix):
            out.append(href.split("#")[0].rstrip("/") + "/")
    return out


def all_pages(category_url: str) -> list[str]:
    """A category's page-1 URL plus every /page/N/ it references."""
    html = fetch(category_url)
    pages = {category_url}
    for href in links_matching(html, urlparse(category_url).path):
        if re.search(r"/page/\d+/$", href):
            pages.add(href)
    # expand: the max /page/N/ number tells us the full range
    nums = [int(m.group(1)) for p in pages if (m := re.search(r"/page/(\d+)/$", p))]
    if nums:
        base = category_url.rstrip("/")
        for n in range(2, max(nums) + 1):
            pages.add(f"{base}/page/{n}/")
    return sorted(pages)


def collect_item_urls() -> list[str]:
    """Walk the root category + all sub-categories, gathering /lyrics/ item URLs."""
    root_html = fetch(BASE + ROOT_CATEGORY)

    subcats = set(links_matching(root_html, "/lcategories/"))
    subcats = {u for u in subcats if "/page/" not in u and "/feed/" not in u}
    subcats.add(BASE + ROOT_CATEGORY)  # the root itself also lists items

    items: set[str] = set()
    for cat in sorted(subcats):
        print(f"category: {cat}", file=sys.stderr)
        for page in all_pages(cat):
            for item in links_matching(fetch(page), "/lyrics/"):
                items.add(item)
    return sorted(items)


def parse_item(url: str) -> dict:
    soup = BeautifulSoup(fetch(url), "html.parser")
    title_el = soup.select_one("h1.entry-title")
    content_el = soup.select_one("div.entry-content")
    title = title_el.get_text(strip=True) if title_el else ""
    # keep line breaks; strip the "Categories :" meta and boilerplate
    lines = []
    if content_el:
        for chunk in content_el.get_text("\n").splitlines():
            chunk = chunk.strip()
            if chunk:
                lines.append(chunk)
    body = "\n".join(lines)
    body = re.sub(r"^Categories\s*:.*$", "", body, flags=re.MULTILINE).strip()
    return {"url": url, "slug": urlparse(url).path.strip("/").split("/")[-1],
            "title": title, "lyrics": body}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="stavans.json")
    ap.add_argument("--limit", type=int, default=0, help="max items (0 = all)")
    args = ap.parse_args()

    print("Collecting item URLs...", file=sys.stderr)
    urls = collect_item_urls()
    if args.limit:
        urls = urls[: args.limit]
    print(f"Found {len(urls)} items. Fetching content...", file=sys.stderr)

    records = []
    for i, url in enumerate(urls, 1):
        print(f"[{i}/{len(urls)}] {url}", file=sys.stderr)
        try:
            records.append(parse_item(url))
        except Exception as e:  # noqa: BLE001
            print(f"  ! failed: {e}", file=sys.stderr)

    Path(args.out).write_text(
        json.dumps(records, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"Wrote {len(records)} records to {args.out}", file=sys.stderr)


if __name__ == "__main__":
    main()
