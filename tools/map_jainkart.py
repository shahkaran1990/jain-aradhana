#!/usr/bin/env python3
"""
Map scraped jainkart.in Girnar-section records -> content.js item objects.

Input:  tools/jainkart_girnar.json  (from scrape_jainkart.py)
Output: JSON list of item dicts on stdout (piped into the splice step).

Per-item handling is driven by the curated PLAN table below (keyed by scrape
slug), because the source mixes three shapes:

  1. Devanagari-only body that is Gujarati-LANGUAGE written in Devanagari
     script (छे / तमे / छो ...). We keep it as hi verbatim and mechanically
     transliterate Devanagari -> Gujarati for gu. (origin="dev")
  2. Devanagari-only body that is genuinely Hindi. Same mechanical gu map;
     it's a script transliteration either way. (origin="dev")
  3. Body containing BOTH a Devanagari copy and a Gujarati copy of the same
     lyrics (separated by a blank-line run). We use the real Gujarati for gu
     and the real Devanagari for hi — no transliteration. (origin="dual")

en is the rule-based romanization of the Devanagari (house policy allows
rule-based romanization for long curated batches). en_title is hand-written.

Titles: hi_title from the plan (native script, from the page <h1>); gu_title is
the mechanical transliteration of hi_title for "dev" items, or a hand value for
"dual" items where a real Gujarati title reads better.
"""

import json
import re
from pathlib import Path

# Reuse the vetted Devanagari transliterator + romanizer from the jainsamaj
# mapper (same house policy: nukta-drop, +0x180 block shift, rule-based roman).
from map_jainsamaj import dev_to_guj, romanize_lines, clean_lyrics

HERE = Path(__file__).parent
SRC = HERE / "jainkart_girnar.json"

GUJ_START, GUJ_END = 0x0A80, 0x0AFF
DEV_START, DEV_END = 0x0900, 0x097F


def has_range(s, lo, hi):
    return any(lo <= ord(c) <= hi for c in s)


def strip_seo_and_source(text: str) -> str:
    """Drop the leading Latin SEO keyword line(s) and any trailing attribution
    line ('Source - ...', 'Source: ...', '- Stavan Manjari', '(रचना ...)',
    '(राग ...)')."""
    lines = text.split("\n")
    # Drop leading lines with NO Devanagari/Gujarati (Latin SEO echo), and
    # leading parenthetical rachna/raag credits.
    while lines:
        ln = lines[0].strip()
        if not ln:
            lines.pop(0)
            continue
        is_native = has_range(ln, DEV_START, DEV_END) or has_range(
            ln, GUJ_START, GUJ_END
        )
        is_credit = bool(re.match(r"^[\(\[]\s*(रचना|रचयिता|राग|तर्ज|तर्ज़)", ln))
        if (not is_native) or is_credit:
            lines.pop(0)
            continue
        break
    # Drop trailing attribution / credit lines.
    while lines:
        ln = lines[-1].strip()
        if not ln:
            lines.pop()
            continue
        low = ln.lower()
        if (
            low.startswith("source")
            or low.startswith("- source")
            or re.match(r"^[-–—]\s*stavan", low)
            or re.match(r"^[\(\[]\s*(रचना|रचयिता|राग|तर्ज)", ln)
            or not (
                has_range(ln, DEV_START, DEV_END)
                or has_range(ln, GUJ_START, GUJ_END)
            )
        ):
            lines.pop()
            continue
        break
    return "\n".join(lines).strip()


def split_dual(text: str):
    """A 'dual' body has a Devanagari block then a Gujarati block. Split at the
    first Gujarati line; everything from there on is the Gujarati copy."""
    lines = text.split("\n")
    gi = None
    for i, ln in enumerate(lines):
        if has_range(ln, GUJ_START, GUJ_END):
            gi = i
            break
    if gi is None:
        return text.strip(), ""  # no gujarati found
    dev = "\n".join(lines[:gi]).strip()
    guj = "\n".join(lines[gi:]).strip()
    return dev, guj


def guj_to_dev(text: str) -> str:
    out = []
    for ch in text:
        cp = ord(ch)
        if GUJ_START <= cp <= GUJ_END:
            if cp == 0x0ABC:  # nukta drop
                continue
            out.append(chr(cp - 0x180))
        else:
            out.append(ch)
    return "".join(out)


# --------------------------------------------------------------------------
# Curated plan. Columns:
#   slug, id, type, origin ("dev"|"dual"), hi_title, gu_title, en_title
# gu_title="" means: transliterate hi_title mechanically.
# Order here is emit order.
# --------------------------------------------------------------------------
PLAN = [
    ("rishabh-dhun-lagi-re-7-yatra", "rishabh-dhun-lagi-re-7-yatra", "stavan", "dev",
     "ऋषभ धुन लागी रे (7 यात्रा)", "", "Rishabh Dhun Lagi Re (7 Yatra)"),
    ("nem-rajul-panthe", "nem-rajul-panthe", "stavan", "dev",
     "नेम राजुल पंथे", "", "Nem Rajul Panthe"),
    ("mare-banvu-nem-girnari-nem", "mare-banvu-nem-girnari-nem", "stavan", "dev",
     "मारे बनवू नेम गिरनारी नेम", "", "Mare Banvu Nem Girnari Nem"),
    ("ghanisht-premee-thaashun-ame-arisht-nemina", "ghanisht-premi-thashu-ame-arisht-nemi", "stavan", "dev",
     "घनिष्ट प्रेमी थाशुं अमे अरिष्ट नेमिना", "", "Ghanisht Premi Thashu Ame Arisht Nemi Na"),
    ("girnari-na-nem", "girnari-na-nem", "stavan", "dev",
     "गिरनारी ना नेम (धोम धखतां तापमां)", "", "Girnari Na Nem (Dhom Dhaktan Tapma)"),
    ("girnare-chali-gayo", "girnare-chali-gayo", "stavan", "dev",
     "गिरनारे चली गयो", "", "Girnare Chali Gayo"),
    ("nem-rajul-ne-moksh-madayo", "nem-rajul-ne-moksh-malyo", "stavan", "dev",
     "नेम राजुल ने मोक्ष मल्यो", "", "Nem Rajul Ne Moksh Malyo"),
    ("nem-charan", "nem-charan", "stavan", "dev",
     "नेम चरण", "", "Nem Charan"),
    ("girnari-tu-nemi", "girnari-tu-nemi", "stavan", "dev",
     "गिरनारी तू नेमि (गिरनारी तू वीतरागी तू)", "", "Girnari Tu Nemi (Girnari Tu Vitragi Tu)"),
    ("nem-maree-aankhon-maa-chhe", "nem-mari-aankho-ma-che", "stavan", "dev",
     "नेम मारी आंखो मा छे", "", "Nem Mari Aankho Ma Che"),
    ("shri-neminath-arti", "shri-naminath-aarti-girnar", "aarti", "dev",
     "श्री नमिनाथ आरती", "", "Shri Naminath Aarti"),
    ("mann-mohi-lindhu-girnare", "man-mohi-lidhu-girnare", "stavan", "dual",
     "मन मोही लीधुं गिरनारे", "મન મોહી લીધું ગિરનારે", "Man Mohi Lidhu Girnare"),
    ("girnare-shri-prabhu-nem-che", "girnare-shri-prabhu-nem-che", "stavan", "dev",
     "गिरनारे श्री प्रभु नेम छे", "", "Girnare Shri Prabhu Nem Che"),
    ("rajul-ne-nem-mali-jashe", "rajul-ne-nem-mali-jashe", "stavan", "dual",
     "राजुल ने नेम मली जाशे", "રાજુલ ને નેમ મલી જાશે", "Rajul Ne Nem Mali Jashe"),
    ("namami-nemi", "namami-nemi", "stavan", "dev",
     "नमामि नेमि", "", "Namami Nemi"),
    ("nemi-preetam-pyara", "nemi-pritam-pyara", "stavan", "dev",
     "नेमी प्रीतम प्यारा", "", "Nemi Pritam Pyara"),
    ("jahan-nemi-ke-charan-pade", "jahan-nemi-ke-charan-pade", "stavan", "dev",
     "जहाँ नेमी के चरण पड़े", "", "Jahan Nemi Ke Charan Pade"),
    # nem-ras (p2) and nemnemnemnem-ras-2 (p3) are the SAME song; keep the p3
    # one below (it has both hi+gu). nem-ras is intentionally absent here.
    ("girnaari-neminath-dada", "neminath-ni-abhishek-dhara", "stavan", "dev",
     "गिरनारी नेमिनाथ दादा (नेमिनाथ नी अभिषेक धारा)", "", "Neminath Ni Abhishek Dhara"),
    ("giriraj", "giriraj-siddhi-taj", "stavan", "dual",
     "गिरिराज (सिद्धि ताज आपी दे)", "ગિરિરાજ (સિદ્ધિ તાજ આપી દે)", "Giriraj (Siddhi Taj Aapi De)"),
    ("mera-nemi-hai-girnaari", "mera-nemi-hai-girnari", "stavan", "dual",
     "मेरा नेमि है गिरनारी", "મેરા નેમિ હૈ ગિરનારી", "Mera Nemi Hai Girnari"),
    ("saath-girnaran", "saath-girnarno", "stavan", "dual",
     "साथ गिरनारनो", "સાથ ગિરનારનો", "Saath Girnarno"),
    ("he-nemijin-", "he-nemijin", "stavan", "dual",
     "हे नेमिजिन", "હે નેમિજિન", "He Nemijin"),
    ("girinare-shobhe-dekho-nemji-shaamliya", "girnare-shobhe-nemji-shamliya", "stavan", "dual",
     "गिरनारे शोभे देखो नेमजी शामलीया", "ગિરનારે શોભે દેખો નેમજી શામલીયા", "Girnare Shobhe Dekho Nemji Shamliya"),
    ("nemnemnemnem-ras-2", "nem-ras", "stavan", "dual",
     "नेम..नेम..नेम..नेम रस", "નેમ..નેમ..નેમ..નેમ રસ", "Nem Nem Nem Nem Ras"),
    ("vhaala-nemji", "vhala-nemji", "stavan", "dev",
     "व्हाला नेमजी", "", "Vhala Nemji"),
    # hum-katha-sunaate-... is EMPTY on the source -> skipped (absent here).
    ("ek-vaar-nem-maari-samu-juone", "ek-var-nem-mari-samu-juone", "stavan", "dev",
     "एक वार नेम मारी सामु जुओने", "", "Ek Var Nem Mari Samu Juone"),
    ("jai-jai-garvo-girnar", "jai-jai-garvo-girnar", "stavan", "dev",
     "जय जय गरवो गिरनार", "", "Jai Jai Garvo Girnar"),
    ("rome-rome-girnar", "rome-rome-girnar", "stavan", "dev",
     "रोमे रोमे गिरनार", "", "Rome Rome Girnar"),
]


def main():
    records = {r["slug"]: r for r in json.load(open(SRC, encoding="utf-8"))}
    items = []
    for slug, item_id, typ, origin, hi_title, gu_title, en_title in PLAN:
        rec = records[slug]
        body = strip_seo_and_source(rec.get("raw", ""))
        if not body.strip():
            raise SystemExit(f"empty body for {slug}")
        if origin == "dual":
            dev, guj = split_dual(body)
            hi = clean_lyrics(dev)
            gu = guj.strip()
            en = romanize_lines(hi)
        else:  # dev
            hi = clean_lyrics(body)
            gu = dev_to_guj(hi)
            en = romanize_lines(hi)
        gt = gu_title if gu_title else dev_to_guj(hi_title)
        items.append({
            "id": item_id,
            "type": typ,
            "title": {"gu": gt, "hi": hi_title, "sa": "", "en": en_title},
            "text": {"gu": gu, "hi": hi, "sa": "", "en": en},
        })
    print(json.dumps(items, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
