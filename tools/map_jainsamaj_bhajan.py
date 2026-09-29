#!/usr/bin/env python3
"""
Map scraped jainsamaj.world /jain-bhajan/ records -> content.js item objects.

Bulk import (247 kept items), so unlike the small curated batches (stuti/aarti/
chalisa) the PLAN is generated PROGRAMMATICALLY from tools/_keep_bhajans.json
rather than hand-written:
  - id   : precomputed unique id on each record (._id), collision-checked
  - type : "bhajan" (this whole section is jain-bhajan)
  - hi_title : the scraped Devanagari title, lightly cleaned (strip leading/
               trailing dandas and a trailing "- <author>"-style tail is left
               as-is; titles here are short)
  - en_title : programmatic romanization of the hi title, title-cased
               (user previously approved programmatic en for bulk imports)

Text mapping reuses the shared pipeline in map_jainsamaj.py: hi = cleaned
scrape, gu = mechanical Devanagari->Gujarati (nuktas dropped), en = rule-based
Latin romanization.

_keep_bhajans.json is produced by the dedup/id-assignment step (records with
._id set, duplicates already removed).

Usage:
  python3 tools/map_jainsamaj_bhajan.py      # prints JSON of mapped items
"""

import json
import re
from pathlib import Path

from map_jainsamaj import dev_to_guj, clean_lyrics, romanize, romanize_lines

HERE = Path(__file__).parent
KEEP = HERE / "_keep_bhajans.json"


def clean_title_hi(title: str) -> str:
    t = title.strip()
    # strip surrounding dandas / decorative markers and collapse spaces
    t = re.sub(r"^[।॥\s]+", "", t)
    t = re.sub(r"[।॥\s]+$", "", t)
    t = re.sub(r"\s{2,}", " ", t)
    return t.strip()


def title_case(s: str) -> str:
    small = {"ka", "ki", "ke", "ko", "se", "me", "mein", "re", "ji", "ho",
             "na", "hai", "aur", "ka", "o"}
    out = []
    for i, w in enumerate(s.split()):
        lw = w.lower()
        if i != 0 and lw in small:
            out.append(lw)
        else:
            out.append(w[:1].upper() + w[1:] if w else w)
    return " ".join(out)


def en_title_from_hi(hi_title: str) -> str:
    # romanize the single title line, drop danda/number markers, title-case
    r = romanize(hi_title)
    r = re.sub(r"[|॥।]+", " ", r)
    r = re.sub(r"\d+", "", r)
    r = re.sub(r"\s{2,}", " ", r).strip(" -")
    return title_case(r)


def main():
    records = json.load(open(KEEP, encoding="utf-8"))
    plan = []
    for r in records:
        hi_title = clean_title_hi(r["title"])
        en_title = en_title_from_hi(hi_title)
        plan.append((r["slug"], r["_id"], "bhajan", hi_title, en_title))

    # map_records keys the source by slug; build items directly here so we can
    # use the precomputed ids and titles.
    items = []
    by_slug = {r["slug"]: r for r in records}
    for slug, item_id, typ, hi_title, en_title in plan:
        rec = by_slug[slug]
        hi = clean_lyrics(rec["lyrics"])
        gu = dev_to_guj(hi)
        en = romanize_lines(hi)
        items.append({
            "id": item_id,
            "type": typ,
            "title": {"gu": dev_to_guj(hi_title), "hi": hi_title, "sa": "", "en": en_title},
            "text": {"gu": gu, "hi": hi, "sa": "", "en": en},
        })
    print(json.dumps(items, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
