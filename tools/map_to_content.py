#!/usr/bin/env python3
"""
Map scraped stavans.json -> content.js item objects.

- type: "bhajan" (per request)
- title: cleaned of "stavan gujarati lyrics" / "lyrics" / "hindi" noise
- text.gu: scraped Gujarati verbatim
- text.hi: mechanical Gujarati->Devanagari script transliteration (same words)
- text.en: programmatic romanization (consistent, recitable; not hand-polished)

Reliability notes:
- Gujarati -> Devanagari is a Unicode block offset of -0x180 (U+0A80 -> U+0900).
  It is a script map, NOT a translation: same words, safe.
- English romanization is rule-based (house-style-ish) but explicitly machine
  generated; flagged for later human polish.
"""

import json
import re
import sys
import unicodedata
from pathlib import Path

HERE = Path(__file__).parent
SRC = HERE / "stavans.json"

GUJ_START, GUJ_END = 0x0A80, 0x0AFF
DEV_OFFSET = -0x180  # Gujarati U+0A80 block -> Devanagari U+0900 block

# ------------------------------------------------------------------ Hindi (script transliteration)
def _guj_to_dev(text: str) -> str:
    out = []
    for ch in text:
        cp = ord(ch)
        if GUJ_START <= cp <= GUJ_END:
            # skip the Gujarati nukta (U+0ABC) to match house nukta-drop policy
            if cp == 0x0ABC:
                continue
            out.append(chr(cp + DEV_OFFSET))
        else:
            out.append(ch)
    return "".join(out)


# ------------------------------------------------------------------ English (romanization)
# Independent-vowel and matra maps for Gujarati.
IND_VOWEL = {
    "અ": "a", "આ": "aa", "ઇ": "i", "ઈ": "ee", "ઉ": "u", "ઊ": "oo",
    "ઋ": "ru", "એ": "e", "ઐ": "ai", "ઓ": "o", "ઔ": "au", "ઍ": "e", "ઑ": "o",
}
MATRA = {
    "ા": "aa", "િ": "i", "ી": "ee", "ુ": "u", "ૂ": "oo", "ૃ": "ru",
    "ે": "e", "ૈ": "ai", "ો": "o", "ૌ": "au", "ૅ": "e", "ૉ": "o",
}
CONS = {
    "ક": "k", "ખ": "kh", "ગ": "g", "ઘ": "gh", "ઙ": "ng",
    "ચ": "ch", "છ": "chh", "જ": "j", "ઝ": "jh", "ઞ": "ny",
    "ટ": "t", "ઠ": "th", "ડ": "d", "ઢ": "dh", "ણ": "n",
    "ત": "t", "થ": "th", "દ": "d", "ધ": "dh", "ન": "n",
    "પ": "p", "ફ": "ph", "બ": "b", "ભ": "bh", "મ": "m",
    "ય": "y", "ર": "r", "લ": "l", "ળ": "l", "વ": "v", "શ": "sh",
    "ષ": "sh", "સ": "s", "હ": "h",
}
DIGIT = {"૦": "0", "૧": "1", "૨": "2", "૩": "3", "૪": "4",
         "૫": "5", "૬": "6", "૭": "7", "૮": "8", "૯": "9"}
VIRAMA = "્"
ANUSVARA = "ં"
CHANDRA = "ઁ"
VISARGA = "ઃ"


def romanize(text: str) -> str:
    out = []
    i = 0
    n = len(text)
    while i < n:
        ch = text[i]
        if ch in CONS:
            out.append(CONS[ch])
            # look ahead: virama -> bare consonant; matra -> that vowel; else inherent 'a'
            j = i + 1
            if j < n and text[j] == VIRAMA:
                i = j + 1
                continue
            if j < n and text[j] in MATRA:
                out.append(MATRA[text[j]])
                i = j + 1
                # trailing anusvara after matra
                if i < n and text[i] == ANUSVARA:
                    out.append("n")
                    i += 1
                continue
            if j < n and text[j] == ANUSVARA:
                out.append("a" + "n")
                i = j + 1
                continue
            # inherent vowel
            out.append("a")
            i += 1
            continue
        if ch in IND_VOWEL:
            out.append(IND_VOWEL[ch])
            i += 1
            if i < n and text[i] == ANUSVARA:
                out.append("n")
                i += 1
            continue
        if ch in DIGIT:
            out.append(DIGIT[ch])
            i += 1
            continue
        if ch == ANUSVARA:
            out.append("n")
            i += 1
            continue
        if ch in (CHANDRA, VISARGA, "ૐ"):
            out.append("" if ch != "ૐ" else "om")
            i += 1
            continue
        # normalize verse markers / stray non-Latin digits to ASCII
        if ch in ("॥", "।"):
            out.append("||" if ch == "॥" else "|")
            i += 1
            continue
        if "\u0966" <= ch <= "\u096F":  # Devanagari digits (leaked from source)
            out.append(str(ord(ch) - 0x0966))
            i += 1
            continue
        if "\u0A66" <= ch <= "\u0A6F":  # Gurmukhi digits (scrape artifact)
            out.append(str(ord(ch) - 0x0A66))
            i += 1
            continue
        # danda-like markers and punctuation pass through
        out.append(ch)
        i += 1
    roman = "".join(out)
    return roman


def romanize_lines(text: str) -> str:
    lines = []
    for line in text.split("\n"):
        r = romanize(line)
        # sentence-case each line
        r = re.sub(r"\s+", " ", r).strip()
        if r:
            r = r[0].upper() + r[1:]
        lines.append(r)
    return "\n".join(lines)


# ------------------------------------------------------------------ Titles
NOISE = re.compile(
    r"\b(stavan|gujarati|lyrics|hindi|jain|diksha|song|songs)\b",
    re.IGNORECASE,
)


def is_devanagari_or_gujarati(s: str) -> bool:
    return any("\u0900" <= c <= "\u0AFF" for c in s)


def clean_en_title(raw: str) -> str:
    # if the title contains a comma splitting native + latin, keep the latin part
    parts = [p.strip() for p in raw.split(",")]
    latin = [p for p in parts if not is_devanagari_or_gujarati(p)]
    base = latin[0] if latin else raw
    base = NOISE.sub("", base)
    base = re.sub(r"\s+", " ", base).strip(" -,")
    # title-case words but keep short ones reasonable
    return " ".join(w.capitalize() if w.islower() else w for w in base.split())


def guj_title(raw: str, lyrics: str) -> str:
    # prefer a Gujarati part of the given title; else first lyric line
    parts = [p.strip() for p in raw.split(",")]
    guj = [p for p in parts if is_devanagari_or_gujarati(p)]
    if guj:
        return guj[0]
    first = lyrics.split("\n")[0].strip().rstrip(",;")
    return first


def slugify(s: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s or "item"


# ------------------------------------------------------------------ Lyrics cleanup
def has_gujarati(s: str) -> bool:
    return any(GUJ_START <= ord(c) <= GUJ_END for c in s)


def clean_lyrics(text: str) -> str:
    """Strip scrape artifacts: whole lines that are pure Latin/ASCII (title echoes,
    'jain diksha Song', etc.) and trailing Latin fragments on mixed lines.
    Lines containing Gujarati are kept; any trailing run of Latin/ASCII after the
    last Gujarati character on that line is trimmed."""
    out = []
    for line in text.split("\n"):
        stripped = line.strip()
        if not stripped:
            out.append("")
            continue
        if not has_gujarati(stripped):
            # pure Latin/punctuation/number line -> drop it
            continue
        # mixed line: trim a trailing Latin fragment (", Aa Kal Ma ...")
        # find index just after the last Gujarati char
        last = max(i for i, c in enumerate(line) if GUJ_START <= ord(c) <= GUJ_END)
        head = line[: last + 1]
        tail = line[last + 1:]
        # keep tail only if it has no ASCII letters (punctuation/markers ok)
        if re.search(r"[A-Za-z]", tail):
            # drop trailing latin, but keep a leading separator like ", "
            tail = re.sub(r"[,\s]*[A-Za-z][\sA-Za-z,.'’\"()\-!?]*$", "", tail)
        line2 = (head + tail).rstrip()
        # remove stray isolated Latin letters embedded in a Gujarati line
        # (OCR noise like "અO", "જગo", "q aq", leading "N") — only strip Latin
        # runs that are NOT part of a real Latin word (<=2 letters, surrounded by
        # non-Latin/space), which are abbreviation-mark artifacts.
        line2 = re.sub(r"(?<![A-Za-z])[A-Za-z]{1,2}(?![A-Za-z])", "", line2)
        line2 = re.sub(r"[ \t]{2,}", " ", line2).rstrip()
        out.append(line2)
    # collapse 3+ blank lines to at most one blank separator
    result = "\n".join(out)
    result = re.sub(r"\n{3,}", "\n\n", result).strip("\n")
    return result


def main():
    limit = int(sys.argv[1]) if len(sys.argv) > 1 else 5
    data = json.load(open(SRC, encoding="utf-8"))
    data = [r for r in data if r["lyrics"].strip()][:limit]
    items = []
    seen_ids: dict[str, int] = {}
    for r in data:
        gu = clean_lyrics(r["lyrics"])
        if not gu.strip():
            continue  # skip items whose lyrics were empty / pure-Latin
        hi = _guj_to_dev(gu)
        en = romanize_lines(gu)
        en_title = clean_en_title(r["title"])
        gu_title = guj_title(r["title"], gu)
        hi_title = _guj_to_dev(gu_title)
        base_id = slugify(en_title) or r["slug"]
        # de-duplicate ids within the batch
        if base_id in seen_ids:
            seen_ids[base_id] += 1
            item_id = f"{base_id}-{seen_ids[base_id]}"
        else:
            seen_ids[base_id] = 1
            item_id = base_id
        items.append({
            "id": item_id,
            "type": "bhajan",
            "title": {"gu": gu_title, "hi": hi_title, "sa": "", "en": en_title},
            "text": {"gu": gu, "hi": hi, "sa": "", "en": en},
        })
    print(json.dumps(items, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
