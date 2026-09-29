#!/usr/bin/env python3
"""
Map scraped jainsamaj.world stuti-path records -> content.js item objects.

This is the Hindi-origin mirror of map_to_content.py (which is Gujarati-origin):

- Source text is Hindi (Devanagari) -> text.hi is the cleaned scrape (verbatim).
- text.gu is a MECHANICAL Devanagari -> Gujarati script transliteration
  (Unicode block offset +0x180, U+0900 -> U+0A80), dropping the Devanagari
  nukta (U+093C) and decomposing precomposed nukta letters per house policy.
  It is a script map, NOT a translation: same words, safe to generate.
- text.sa / text.en are left blank here; en is HAND-WRITTEN afterwards (this is
  a small curated batch, not a bulk import), and sa only where the source is
  actually Sanskrit/Prakrit.

Per-item id, type (natural category) and titles come from a hand-curated PLAN
table below, keyed by the scrape slug — so only the KEEP items are emitted, in
the chosen order, with the right category. Duplicates and skipped edge cases
are simply absent from the plan.

Usage:
  python3 tools/map_jainsamaj.py            # prints JSON of mapped items
"""

import json
import re
import unicodedata
from pathlib import Path

HERE = Path(__file__).parent
SRC = HERE / "jainsamaj_stutis.json"

DEV_START, DEV_END = 0x0900, 0x097F
GUJ_OFFSET = 0x180  # Devanagari U+0900 block -> Gujarati U+0A80 block

# Precomposed Devanagari nukta letters -> their base (nukta dropped) per policy.
NUKTA_DECOMPOSE = {
    "\u0929": "\u0928",  # ऩ -> न
    "\u0931": "\u0930",  # ऱ -> र
    "\u0934": "\u0933",  # ऴ -> ळ
    "\u0958": "\u0915",  # क़ -> क
    "\u0959": "\u0916",  # ख़ -> ख
    "\u095A": "\u0917",  # ग़ -> ग
    "\u095B": "\u091C",  # ज़ -> ज
    "\u095C": "\u0921",  # ड़ -> ड
    "\u095D": "\u0922",  # ढ़ -> ढ
    "\u095E": "\u092B",  # फ़ -> फ
    "\u095F": "\u092F",  # य़ -> य
}
DEV_NUKTA = "\u093C"


def dev_to_guj(text: str) -> str:
    """Mechanical Devanagari -> Gujarati transliteration, dropping nuktas."""
    out = []
    for ch in text:
        if ch == DEV_NUKTA:
            continue  # drop standalone nukta
        base = NUKTA_DECOMPOSE.get(ch, ch)
        cp = ord(base)
        if DEV_START <= cp <= DEV_END:
            # U+0964/U+0965 (danda/double danda) are shared punctuation, no shift
            if cp in (0x0964, 0x0965):
                out.append(base)
            else:
                out.append(chr(cp + GUJ_OFFSET))
        else:
            out.append(base)
    return "".join(out)


# --------------------------------------------------------------------------
# English romanization (Devanagari -> Latin), rule-based and consistent.
# This is a PRONUNCIATION transliteration, not a translation of meaning. It
# mirrors the Gujarati romanizer in map_to_content.py: independent vowels,
# matras, consonant + inherent 'a', virama = bare consonant, anusvara -> n,
# long vowels aa/ee/oo, danda -> | / ||, Devanagari digits -> arabic.
# Titles and proper nouns are hand-polished afterwards; this handles the body.
# --------------------------------------------------------------------------
DEV_IND_VOWEL = {
    "अ": "a", "आ": "aa", "इ": "i", "ई": "ee", "उ": "u", "ऊ": "oo",
    "ऋ": "ri", "ए": "e", "ऐ": "ai", "ओ": "o", "औ": "au", "ऍ": "e", "ऑ": "o",
}
DEV_MATRA = {
    "ा": "aa", "ि": "i", "ी": "ee", "ु": "u", "ू": "oo", "ृ": "ri",
    "े": "e", "ै": "ai", "ो": "o", "ौ": "au", "ॅ": "e", "ॉ": "o",
}
DEV_CONS = {
    "क": "k", "ख": "kh", "ग": "g", "घ": "gh", "ङ": "ng",
    "च": "ch", "छ": "chh", "ज": "j", "झ": "jh", "ञ": "ny",
    "ट": "t", "ठ": "th", "ड": "d", "ढ": "dh", "ण": "n",
    "त": "t", "थ": "th", "द": "d", "ध": "dh", "न": "n",
    "प": "p", "फ": "ph", "ब": "b", "भ": "bh", "म": "m",
    "य": "y", "र": "r", "ल": "l", "ळ": "l", "व": "v", "श": "sh",
    "ष": "sh", "स": "s", "ह": "h",
}
DEV_DIGIT = {"०": "0", "१": "1", "२": "2", "३": "3", "४": "4",
             "५": "5", "६": "6", "७": "7", "८": "8", "९": "9"}
DEV_VIRAMA = "्"
DEV_ANUSVARA = "ं"
DEV_CHANDRABINDU = "ँ"
DEV_VISARGA = "ः"


def romanize(text: str) -> str:
    # Decompose precomposed nukta letters (ड़->ड, ढ़->ढ, etc.) and drop the
    # standalone nukta first, so the tables below see plain base consonants.
    text = "".join(
        "" if ch == DEV_NUKTA else NUKTA_DECOMPOSE.get(ch, ch) for ch in text
    )
    out = []
    i = 0
    n = len(text)
    while i < n:
        # multi-char conjuncts first (क्ष, त्र, ज्ञ, श्र). Bases carry NO
        # inherent vowel; add 'a' only when no matra/virama follows.
        CONJ_BASE = {"क्ष": "ksh", "त्र": "tr", "ज्ञ": "gy", "श्र": "shr"}
        matched = False
        for conj, base in CONJ_BASE.items():
            if text.startswith(conj, i):
                out.append(base)
                j = i + len(conj)
                if j < n and text[j] == DEV_VIRAMA:
                    i = j + 1
                elif j < n and text[j] in DEV_MATRA:
                    out.append(DEV_MATRA[text[j]])
                    i = j + 1
                    if i < n and text[i] == DEV_ANUSVARA:
                        out.append("n")
                        i += 1
                else:
                    out.append("a")
                    i = j
                matched = True
                break
        if matched:
            continue
        ch = text[i]
        if ch in DEV_CONS:
            out.append(DEV_CONS[ch])
            j = i + 1
            if j < n and text[j] == DEV_VIRAMA:
                i = j + 1
                continue
            if j < n and text[j] in DEV_MATRA:
                out.append(DEV_MATRA[text[j]])
                i = j + 1
                if i < n and text[i] == DEV_ANUSVARA:
                    out.append("n")
                    i += 1
                continue
            if j < n and text[j] == DEV_ANUSVARA:
                out.append("an")
                i = j + 1
                continue
            out.append("a")
            i += 1
            continue
        if ch in DEV_IND_VOWEL:
            out.append(DEV_IND_VOWEL[ch])
            i += 1
            if i < n and text[i] == DEV_ANUSVARA:
                out.append("n")
                i += 1
            continue
        if ch in DEV_DIGIT:
            out.append(DEV_DIGIT[ch])
            i += 1
            continue
        if ch == DEV_ANUSVARA:
            out.append("n")
            i += 1
            continue
        if ch == DEV_CHANDRABINDU:
            out.append("n")
            i += 1
            continue
        if ch == DEV_VISARGA:
            out.append("h")
            i += 1
            continue
        if ch == "ॐ":
            out.append("om")
            i += 1
            continue
        if ch == "।":
            out.append("|")
            i += 1
            continue
        if ch == "॥":
            out.append("||")
            i += 1
            continue
        if ch == DEV_NUKTA:  # stray nukta -> drop
            i += 1
            continue
        out.append(ch)
        i += 1
    return "".join(out)


def romanize_lines(text: str) -> str:
    lines = []
    for line in text.split("\n"):
        r = romanize(line)
        r = re.sub(r"\s+", " ", r).strip()
        # tidy spacing around danda markers
        r = re.sub(r"\s*\|\|\s*", " || ", r).strip()
        r = re.sub(r"\s*\|\s*", " | ", r)
        r = re.sub(r"\s{2,}", " ", r).strip()
        if r:
            r = r[0].upper() + r[1:]
        lines.append(r)
    return "\n".join(lines)


def clean_lyrics(text: str) -> str:
    """Light cleanup of the scrape:
    - normalize whitespace per line, drop empty runs to a single blank line
    - drop obvious non-verse artifact lines (author-credit parentheticals are
      kept as-is; they read fine as a header)
    """
    lines = []
    for line in text.split("\n"):
        s = line.replace("\t", " ").strip()
        s = re.sub(r"[ \u00a0]{2,}", " ", s)
        # Normalize rare South-Indic short vowel matras that appear as source
        # typos in Hindi text: short-o (U+094A) -> o (U+094B), short-e
        # (U+0946) -> e (U+0947). (e.g. "रॊग" -> "रोग".)
        s = s.replace("\u094A", "\u094B").replace("\u0946", "\u0947")
        lines.append(s)
    result = "\n".join(lines)
    result = re.sub(r"\n{3,}", "\n\n", result).strip("\n")
    return result


# --------------------------------------------------------------------------
# Curated plan: scrape-slug -> (id, type, hi_title). Order here is emit order.
# Only KEEP items appear. `en_title` and per-item `en`/`sa` are filled by hand
# after this step (see fill_en step).
# --------------------------------------------------------------------------
# (scrape_slug, id, type, hi_title, en_title). en_title is HAND-WRITTEN
# (house style: proper-noun caps, no auto-translation of meaning).
PLAN = [
    # paath
    ("aaradhna-paath",                       "aaradhna-paath",                 "paath",  "आराधना पाठ", "Aaradhna Paath"),
    ("aalochna-paath",                       "aalochna-paath",                 "paath",  "आलोचना पाठ", "Aalochna Paath"),
    ("samadhi-paath-teri-chhatra-chhaya",    "samadhi-paath-teri-chhatra-chhaya", "paath", "समाधि पाठ (तेरी छत्र छाया)", "Samadhi Paath (Teri Chhatra Chhaya)"),
    # bhavna
    ("baarh-bhavna-badi",                    "barah-bhavna-badi",              "bhavna", "बारह भावना (बड़ी)", "Barah Bhavna (Badi)"),
    ("samadhi-bhawna",                       "samadhi-bhavna",                 "bhavna", "समाधि भावना", "Samadhi Bhavna"),
    ("darshan-bhavna-punah-r601",            "darshan-bhavna-punah-darshan",   "bhavna", "दर्शन भावना (पुनः दर्शन मिले स्वामी)", "Darshan Bhavna (Punah Darshan Mile Swami)"),
    ("amulya-tatv-vichar",                   "amulya-tatv-vichar",             "bhavna", "अमूल्य तत्त्व विचार", "Amulya Tattva Vichar"),
    # stuti
    ("darshan-path-tum-nirkhat-mujhko-mili", "darshan-path-tum-nirkhat",       "stuti",  "दर्शन पाठ (तुम निरखत मुझको मिली)", "Darshan Paath (Tum Nirkhat Mujhko Mili)"),
    ("darshan-stutiati-punya-uday-mam-aaya", "darshan-stuti-ati-punya-uday",   "stuti",  "दर्शन स्तुति (अति पुण्य उदय मम आया)", "Darshan Stuti (Ati Punya Uday Mam Aaya)"),
    ("darshan-stutijay-vitraag-vigyan-pur",  "darshan-stuti-jay-vitraag-vigyan","stuti", "दर्शन स्तुति (जय वीतराग विज्ञान)", "Darshan Stuti (Jay Vitraag Vigyan)"),
    ("dev-stuti-aho-jagat",                  "dev-stuti-aho-jagat",            "stuti",  "देव स्तुति (अहो जगत्)", "Dev Stuti (Aho Jagat)"),
    ("guru-stuti",                           "guru-stuti",                     "stuti",  "गुरु स्तुति", "Guru Stuti"),
    ("jinwani-stuti",                        "jinvani-stuti-mithyatam",        "stuti",  "जिनवाणी स्तुति (मिथ्यातम नाशवे को)", "Jinvani Stuti (Mithyatam Nashve Ko)"),
    ("jinwani-stuti-r603",                   "jinvani-stuti-shastra-pathan",   "stuti",  "जिनवाणी स्तुति (शास्त्र पठन में)", "Jinvani Stuti (Shastra Pathan Mein)"),
    ("siddha-chakra-stuti",                  "siddha-chakra-stuti",            "stuti",  "सिद्ध चक्र स्तुति", "Siddha Chakra Stuti"),
    ("bhaktamar-mahima",                     "bhaktamar-mahima",               "stuti",  "भक्तामर महिमा", "Bhaktamar Mahima"),
    ("choubees-tirthankar-vandan",           "choubees-tirthankar-vandan",     "stuti",  "चौबीस तीर्थंकर वंदन", "Choubees Tirthankar Vandan"),
    # bhajan
    ("jay-jinvani",                          "jay-jinvani",                    "bhajan", "जय जिनवाणी", "Jay Jinvani"),
    ("jinvar-jinvani",                       "jinvar-jinvani",                 "bhajan", "जिनवर जिनवाणी", "Jinvar Jinvani"),
    ("maa-jinvani-mamta-nyari",              "maa-jinvani-mamta-nyari",        "bhajan", "माँ जिनवाणी ममता न्यारी", "Maa Jinvani Mamta Nyari"),
    ("mhaari-maa-jinvaani",                  "mhaari-maa-jinvani",             "bhajan", "म्हारी माँ जिनवाणी", "Mhaari Maa Jinvani"),
    ("aatm-kirtan",                          "aatm-kirtan",                    "bhajan", "आत्म कीर्तन", "Aatm Kirtan"),
    ("isht-prarthna",                        "isht-prarthna",                  "bhajan", "इष्ट प्रार्थना", "Isht Prarthna"),
    ("siddha-kshetra-mangi-tungi-r610",      "siddha-kshetra-mangi-tungi",     "bhajan", "सिद्ध क्षेत्र मांगी तुंगी यात्रा का भजन", "Siddha Kshetra Mangi Tungi Yatra ka Bhajan"),
]


def main():
    print(json.dumps(map_records(SRC, PLAN), ensure_ascii=False, indent=2))


def map_records(src_path, plan):
    """Map a scrape JSON (list of {slug,title,lyrics}) + a PLAN table into
    content.js item dicts. Shared by the stuti and aarti batches: hi is the
    cleaned scrape, gu is the mechanical Devanagari->Gujarati transliteration,
    en is the rule-based romanization; titles come from the plan (hi + hand-
    written en). PLAN rows are (scrape_slug, id, type, hi_title, en_title)."""
    records = {r["slug"]: r for r in json.load(open(src_path, encoding="utf-8"))}
    items = []
    for slug, item_id, typ, hi_title, en_title in plan:
        rec = records[slug]
        hi = clean_lyrics(rec["lyrics"])
        gu = dev_to_guj(hi)
        gu_title = dev_to_guj(hi_title)
        en = romanize_lines(hi)
        items.append({
            "id": item_id,
            "type": typ,
            "title": {"gu": gu_title, "hi": hi_title, "sa": "", "en": en_title},
            "text": {"gu": gu, "hi": hi, "sa": "", "en": en},
        })
    return items


if __name__ == "__main__":
    main()
