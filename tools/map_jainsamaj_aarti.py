#!/usr/bin/env python3
"""
Map scraped jainsamaj.world /aarti/ records -> content.js item objects.

Thin wrapper over map_jainsamaj.py: reuses the same Hindi-origin pipeline
(hi = cleaned scrape, gu = mechanical Devanagari->Gujarati transliteration with
nuktas dropped, en = rule-based Latin romanization) and only supplies this
batch's source file + curated PLAN table.

PLAN row = (scrape_slug, id, type, hi_title, en_title). en_title is
hand-written (house style: proper-noun caps, no auto-translation). Only KEEP
items appear; duplicates and the Marathi edge case are simply absent.

SKIPPED (not in the plan):
  - panch-parmeshti-aarti      -> duplicate of existing panch-parmeshthi-aarti
  - mahaveer-swami             -> duplicate of existing bhagwan-mahavir-aarti
  - marathi-arti-vitraag-jin-r611 -> Marathi (per user: skip non-Hindi)

All are type "aarti" except chandra-prabhu-ji-jinvani, which is a devotional
song (stavan), not an आरती.

Usage:
  python3 tools/map_jainsamaj_aarti.py       # prints JSON of mapped items
"""

import json
from pathlib import Path

from map_jainsamaj import map_records

SRC = Path(__file__).parent / "jainsamaj_aartis.json"

PLAN = [
    # Tirthankar aartis (24 tirthankars + others), type "aarti"
    ("aadinath-ji-aarti-1",          "aadinath-aarti-1",          "aarti",  "आदिनाथ जी आरती (1)",           "Aadinath Ji Aarti (1)"),
    ("aadinath-ji-aarti-2",          "aadinath-aarti-2",          "aarti",  "आदिनाथ जी आरती (2)",           "Aadinath Ji Aarti (2)"),
    ("aadinath-ji-aarti-3",          "aadinath-aarti-3",          "aarti",  "आदिनाथ जी आरती (3)",           "Aadinath Ji Aarti (3)"),
    ("ajitnaath-ji-aarti",           "ajitnath-aarti",            "aarti",  "अजितनाथ जी आरती",              "Ajitnath Ji Aarti"),
    ("arti-ananthnath-ji-jinvani",   "anantnath-aarti",           "aarti",  "आरती अनंतनाथ जी",              "Aarti Anantnath Ji"),
    ("arti-bahubali-ji",             "bahubali-aarti",            "aarti",  "आरती बाहुबली जी",              "Aarti Bahubali Ji"),
    ("arti-baje-cham-cham-cham",     "aarti-baje-cham-cham-cham", "aarti",  "आरती बजे छम छम छम",            "Aarti Baje Cham Cham Cham"),
    ("arti-chandraprabhu-ji-jinvani","chandraprabhu-aarti",       "aarti",  "आरती चंद्रप्रभु जी",           "Aarti Chandraprabhu Ji"),
    ("arti-kunthunath-ji-jinvani",   "kunthunath-aarti",          "aarti",  "आरती कुंथुनाथ जी",             "Aarti Kunthunath Ji"),
    ("arti-mallinath-ji-jinvani",    "mallinath-aarti",           "aarti",  "आरती मल्लिनाथ जी",             "Aarti Mallinath Ji"),
    ("arti-munisuvrat-ji-jinvani",   "munisuvrat-aarti-1",        "aarti",  "आरती मुनिसुव्रत जी",           "Aarti Munisuvrat Ji"),
    ("arti-neminath-ji-jinvani",     "neminath-aarti",            "aarti",  "आरती नेमिनाथ जी",              "Aarti Neminath Ji"),
    ("aarti-padmaprabhu-ji-jinvani", "padmaprabhu-aarti",         "aarti",  "आरती पद्मप्रभु जी",            "Aarti Padmaprabhu Ji"),
    ("arti-pushpadant-ji-jinvani",   "pushpadant-aarti",          "aarti",  "आरती पुष्पदंत जी",             "Aarti Pushpadant Ji"),
    ("arti-shantinath-ji-jinvani",   "shantinath-aarti-1",        "aarti",  "आरती शांतिनाथ जी",             "Aarti Shantinath Ji"),
    ("arti-sheetalnath-ji-jinvani",  "sheetalnath-aarti",         "aarti",  "आरती शीतलनाथ जी",              "Aarti Sheetalnath Ji"),
    ("arti-shreyanshnath-ji-jinvani","shreyanshnath-aarti",       "aarti",  "आरती श्रेयांशनाथ जी",          "Aarti Shreyanshnath Ji"),
    ("arti-vasupujya-ji-jinvani",    "vasupujya-aarti",           "aarti",  "आरती वासुपूज्य जी",            "Aarti Vasupujya Ji"),
    ("arti-vimalnath-ji-jinvani",    "vimalnath-aarti",           "aarti",  "आरती विमलनाथ जी",              "Aarti Vimalnath Ji"),
    ("chaubisi-arti-jinvani",        "chaubisi-aarti",            "aarti",  "चौबीसी आरती",                  "Chaubisi Aarti"),
    ("shree-jinvani-mata-ki-arti",   "jinvani-mata-aarti",        "aarti",  "श्री जिनवाणी माता की आरती",    "Shree Jinvani Mata ki Aarti"),
    ("mahaveer-swami-a",             "mahaveer-aarti-jag-nayak",  "aarti",  "महावीर स्वामी आरती (जग नायक)", "Mahaveer Swami Aarti (Jag Nayak)"),
    ("mahaveer-swami-b",             "mahaveer-aarti-sanmati",    "aarti",  "महावीर स्वामी आरती (जय सन्मति देवा)", "Mahaveer Swami Aarti (Jay Sanmati Deva)"),
    ("mahaveer-swami-c",             "mahaveer-aarti-vardhaman",  "aarti",  "महावीर स्वामी आरती (करौं आरती वर्द्धमान की)", "Mahaveer Swami Aarti (Karaun Aarti Vardhaman ki)"),
    ("munisuvrat-nath-ji-jinvani",   "munisuvrat-aarti-2",        "aarti",  "मुनिसुव्रत नाथ जी आरती",       "Munisuvrat Nath Ji Aarti"),
    ("nirvan-shetra-arti-mayank-sagar-ji", "nirvan-kshetra-aarti","aarti",  "निर्वाण क्षेत्र आरती",         "Nirvan Kshetra Aarti"),
    ("parasnath-ji-jinvani",         "parasnath-aarti-1",         "aarti",  "पारसनाथ जी आरती",              "Parasnath Ji Aarti"),
    ("parasnath-ji-badagaon",        "parasnath-aarti-badagaon",  "aarti",  "पारसनाथ जी आरती (बड़ागांव)",   "Parasnath Ji Aarti (Badagaon)"),
    ("parasnath-ji-a",               "parasnath-aarti-2",         "aarti",  "पारसनाथ जी आरती (2)",          "Parasnath Ji Aarti (2)"),
    ("shantinath-ji-jinvani",        "shantinath-aarti-2",        "aarti",  "शांतिनाथ जी आरती (2)",         "Shantinath Ji Aarti (2)"),
    ("shree-nandishwar-dweep-arti",  "nandishwar-dweep-aarti",    "aarti",  "श्री नन्दीश्वर द्वीप आरती",    "Shree Nandishwar Dweep Aarti"),
    ("choubees-tirthakar-arti-agh-har-r609", "choubees-tirthankar-aarti-agh-har", "aarti", "चौबीस तीर्थंकर आरती (अघ-हर श्री जिन)", "Choubees Tirthankar Aarti (Agh-Har Shri Jin)"),
    # devotional song, not an aarti -> stavan
    ("chandra-prabhu-ji-jinvani",    "chandraprabhu-mhara-stavan","stavan", "म्हारा चन्द्र प्रभु जी",       "Mhara Chandra Prabhu Ji"),
]


def main():
    print(json.dumps(map_records(SRC, PLAN), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
