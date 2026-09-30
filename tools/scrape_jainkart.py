#!/usr/bin/env python3
"""
Scrape jainkart.in "Girnar Stavan" library section -> jainkart_girnar.json.

Unlike jainsamaj.world, jainkart serves plain requests fine as long as a
browser User-Agent is sent, so this is a self-contained urllib scraper (no
browser needed).

Structure of a detail page (https://www.jainkart.in/<slug>):
  - <title> = "<A> | <B> | Jainkart" where one of A/B is the native-script
    title and the other is the English (romanized) title. The <h1> is the
    native-script title, which we use to disambiguate.
  - div.post-content div.post-body holds the lyrics. <br> = line break,
    </p> = stanza break (blank line).
  - The body frequently OPENS with a line of comma-separated Latin SEO
    keywords (e.g. "nem rajul panthe, nemi, neminath, ...") and CLOSES with an
    attribution line ("Source - X" / "Source: X" / "- Stavan Manjari").
  - Some posts contain BOTH a Devanagari copy and a Gujarati copy of the same
    lyrics, one after the other, separated by a run of blank lines.

We keep the raw body plus title parts; splitting/cleanup is left to the mapper
so this stays a faithful capture.
"""

import html
import json
import re
import time
import urllib.request
from pathlib import Path

HERE = Path(__file__).parent
OUT = HERE / "jainkart_girnar.json"

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
)

# Detail-page slugs in library order (page 1, 2, 3).
SLUGS = [
    # page 1
    "rishabh-dhun-lagi-re-7-yatra", "nem-rajul-panthe",
    "mare-banvu-nem-girnari-nem", "ghanisht-premee-thaashun-ame-arisht-nemina",
    "girnari-na-nem", "girnare-chali-gayo", "nem-rajul-ne-moksh-madayo",
    "nem-charan", "girnari-tu-nemi", "nem-maree-aankhon-maa-chhe",
    # page 2
    "shri-neminath-arti", "mann-mohi-lindhu-girnare",
    "girnare-shri-prabhu-nem-che", "rajul-ne-nem-mali-jashe", "namami-nemi",
    "nemi-preetam-pyara", "jahan-nemi-ke-charan-pade", "nem-ras",
    "girnaari-neminath-dada", "giriraj",
    # page 3
    "mera-nemi-hai-girnaari", "saath-girnaran", "he-nemijin-",
    "girinare-shobhe-dekho-nemji-shaamliya", "nemnemnemnem-ras-2",
    "vhaala-nemji", "hum-katha-sunaate-neminath-rajul-ki-shaadi-ki",
    "ek-vaar-nem-maari-samu-juone", "jai-jai-garvo-girnar", "rome-rome-girnar",
]


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", "replace")


def extract_title(doc: str) -> str:
    m = re.search(r"<title>(.*?)</title>", doc, re.S | re.I)
    return html.unescape(m.group(1)).strip() if m else ""


def extract_h1(doc: str) -> str:
    m = re.search(r"<h1[^>]*>(.*?)</h1>", doc, re.S | re.I)
    if not m:
        return ""
    return html.unescape(re.sub(r"<[^>]+>", "", m.group(1))).strip()


def extract_body(doc: str) -> str:
    """Return the post-body inner text with line/stanza breaks preserved.

    Two page shapes exist:
      (a) lyrics as <p>..<br>..</p> stanzas directly under div.post-body;
      (b) an outer div.post-body wrapping an <audio> player + an inner
          div#post-body.entry-content whose lyric LINES are each their own
          <div><span>..</span></div>.
    We locate the post-body opening tag, then take everything up to the
    post-footer / buttons block (a fixed sibling), so nested inner </div>s
    don't cut us short. Then we drop audio/img/strikethrough noise and map
    block-closers to newlines.
    """
    # Prefer the inner entry-content body when present (shape b); it holds the
    # real lyrics without the leading <s>SEO</s> / <audio> preamble.
    inner = re.search(
        r'<div[^>]*id="post-body"[^>]*>(.*?)'
        r'(?=<div[^>]*class="[^"]*\b(?:buttons|post-footer)\b|</article|</main)',
        doc, re.S | re.I,
    )
    if inner:
        frag = inner.group(1)
    else:
        start = re.search(
            r'<div[^>]*class="[^"]*\bpost-body\b[^"]*"[^>]*>', doc, re.I
        )
        if not start:
            return ""
        tail = doc[start.end():]
        end = re.search(
            r'<div[^>]*class="[^"]*\b(?:buttons|post-footer)\b|</article|</main',
            tail, re.S | re.I,
        )
        frag = tail[: end.start()] if end else tail
    # Remove media / non-text noise entirely.
    frag = re.sub(r"(?is)<audio.*?</audio>", "", frag)
    frag = re.sub(r"(?is)<source[^>]*>", "", frag)
    frag = re.sub(r"(?is)<img[^>]*>", "", frag)
    frag = re.sub(r"(?is)<s\b[^>]*>.*?</s>", "", frag)  # strikethrough SEO echo
    # This source uses UNCLOSED <p> tags to open each stanza, and <br> for
    # line breaks within a stanza. So an OPENING <p> is a stanza boundary
    # (blank line); <br> and block boundaries are single newlines.
    frag = re.sub(r"(?i)<br\s*/?>", "\n", frag)
    frag = re.sub(r"(?i)</?p\b[^>]*>", "\n\n", frag)   # any <p> or </p>
    frag = re.sub(r"(?i)</div\s*>", "\n", frag)
    frag = re.sub(r"(?i)<div\b[^>]*>", "\n", frag)
    frag = re.sub(r"<[^>]+>", "", frag)  # strip remaining tags (spans etc.)
    text = html.unescape(frag).replace("\r", "").replace("\u00a0", " ")
    # tidy: trailing spaces per line, collapse 3+ blank lines to one blank
    text = "\n".join(ln.rstrip() for ln in text.split("\n"))
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text


def main():
    records = []
    for slug in SLUGS:
        url = f"https://www.jainkart.in/{slug}"
        try:
            doc = fetch(url)
            records.append({
                "slug": slug,
                "url": url,
                "docTitle": extract_title(doc),
                "h1": extract_h1(doc),
                "raw": extract_body(doc).strip(),
            })
            print(f"OK  {slug}  ({len(records[-1]['raw'])} chars)")
        except Exception as e:  # noqa: BLE001
            records.append({"slug": slug, "url": url, "error": repr(e)})
            print(f"ERR {slug}: {e!r}")
        time.sleep(0.4)  # be polite
    OUT.write_text(json.dumps(records, ensure_ascii=False, indent=2), "utf-8")
    print(f"\nWrote {len([r for r in records if 'raw' in r])} records -> {OUT}")


if __name__ == "__main__":
    main()
