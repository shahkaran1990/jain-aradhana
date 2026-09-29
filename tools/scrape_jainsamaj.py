#!/usr/bin/env python3
"""
Scrape Hindi (Devanagari) stuti / paath lyrics from jainsamaj.world.

Companion to scrape_jainsite.py. Different site, different platform: this one
is an Invision Community "CMS database", not WordPress, so the structure and
selectors differ:

  listing page : /jinvani.html/stuti-path/            (+ /page/N/)
    -> lists item links /jinvani.html/stuti-path/<slug>/ (each appears twice:
       a title link and a thumbnail link, with an "admin" author link between)
  item page    : /jinvani.html/stuti-path/<slug>/
    -> <h1> holds the Devanagari title
    -> the lyrics live in [data-role="commentContent"] (verses separated by
       blank lines; a stray " " line sits between stanzas)

IMPORTANT: jainsamaj.world returns HTTP 403 to non-browser User-Agents, so a
plain requests fetch is blocked. This module therefore supports two fetch
backends:

  * requests (default) — works only if the site stops 403-ing bots.
  * a pre-populated on-disk cache under tools/.cache_jainsamaj/ — drop the
    rendered HTML (or, more usefully, extracted JSON) there and the parser
    reads it without hitting the network. The stuti-path set was collected
    once via a real browser (Playwright) and the extracted records live in
    tools/jainsamaj_stutis.json, which map_to_content.py can consume directly.

Politeness mirrors the sister scraper: one request at a time, DELAY between
requests, on-disk cache, real-ish User-Agent.

Usage:
  python3 scrape_jainsamaj.py --out jainsamaj_stutis.json
  python3 scrape_jainsamaj.py --limit 3
"""

import argparse
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:  # pragma: no cover
    requests = None
    BeautifulSoup = None

BASE = "https://jainsamaj.world"
LISTING = "/jinvani.html/stuti-path/"
CACHE_DIR = Path(__file__).parent / ".cache_jainsamaj"
DELAY_SECONDS = 1.0
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)

# The lyrics container on an item page.
CONTENT_SELECTOR = '[data-role="commentContent"]'


def cache_path(url: str) -> Path:
    slug = re.sub(r"[^a-zA-Z0-9]+", "_", urlparse(url).path).strip("_") or "index"
    return CACHE_DIR / f"{slug}.html"


def fetch(url: str) -> str:
    cp = cache_path(url)
    if cp.exists():
        return cp.read_text(encoding="utf-8")
    if requests is None:
        raise RuntimeError("requests/bs4 not installed and no cache for " + url)
    time.sleep(DELAY_SECONDS)
    print(f"  GET {url}", file=sys.stderr)
    resp = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=30)
    resp.raise_for_status()  # will raise 403 on this site without a real browser
    resp.encoding = resp.apparent_encoding or "utf-8"
    CACHE_DIR.mkdir(exist_ok=True)
    cp.write_text(resp.text, encoding="utf-8")
    return resp.text


def listing_pages() -> list[str]:
    """The listing page-1 URL plus every /page/N/ it references."""
    html = fetch(BASE + LISTING)
    soup = BeautifulSoup(html, "html.parser")
    pages = {BASE + LISTING}
    for a in soup.select("a[href]"):
        href = urljoin(BASE, a["href"]).split("#")[0]
        if re.search(re.escape(LISTING) + r"page/\d+/$", href):
            pages.add(href)
    nums = [int(m.group(1)) for p in pages if (m := re.search(r"/page/(\d+)/$", p))]
    if nums:
        base = (BASE + LISTING).rstrip("/")
        for n in range(2, max(nums) + 1):
            pages.add(f"{base}/page/{n}/")
    return sorted(pages)


def collect_item_urls() -> list[str]:
    items: dict[str, None] = {}
    for page in listing_pages():
        soup = BeautifulSoup(fetch(page), "html.parser")
        for a in soup.select("a[href]"):
            href = urljoin(BASE, a["href"]).split("#")[0]
            if not href.startswith(BASE + LISTING):
                continue
            rest = href[len(BASE + LISTING):].rstrip("/")
            # item slug: one path segment, no query, not a /page/ link
            if rest and "/" not in rest and "?" not in rest and not rest.startswith("page"):
                items.setdefault(href.rstrip("/") + "/", None)
    return list(items)


def parse_item(url: str) -> dict:
    soup = BeautifulSoup(fetch(url), "html.parser")
    h1 = soup.select_one("h1")
    content = soup.select_one(CONTENT_SELECTOR)
    title = h1.get_text(strip=True) if h1 else ""
    lines = []
    if content:
        for chunk in content.get_text("\n").splitlines():
            chunk = chunk.strip()
            if chunk:
                lines.append(chunk)
    return {
        "url": url,
        "slug": urlparse(url).path.strip("/").split("/")[-1],
        "title": title,
        "lyrics": "\n".join(lines),
    }


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="jainsamaj_stutis.json")
    ap.add_argument("--limit", type=int, default=0)
    args = ap.parse_args()

    print("Collecting item URLs...", file=sys.stderr)
    urls = collect_item_urls()
    if args.limit:
        urls = urls[: args.limit]
    print(f"Found {len(urls)} items.", file=sys.stderr)

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
