#!/usr/bin/env python3
"""
Map scraped jainsamaj.world /chalisa/ records -> content.js item objects.

Thin wrapper over map_jainsamaj.py (same Hindi-origin pipeline: hi = cleaned
scrape, gu = mechanical Devanagari->Gujarati with nuktas dropped, en =
rule-based Latin romanization). Supplies this batch's source file + curated
PLAN table.

PLAN row = (scrape_slug, id, type, hi_title, en_title). en_title is
hand-written. Only KEEP items appear; duplicates are absent.

All 24 Tirthankar chalisas are type "chalisa".

SKIPPED (not in the plan) as duplicates of existing content:
  - chalisa-shri-sheetalnath-ji  -> existing sheetalnath-chalisa (Jaccard 0.98)
  - chalisa-shri-shantinath-ji   -> existing shantinath-chalisa (same verses,
                                    spelling variants only)
  - parshvanath-chalisa-r605     -> existing parshwanath-chalisa (Jaccard 0.79,
                                    same opening doha + core verses)
NOTE: chalisa-shri-parsvanath-ji is the DISTINCT Badagaon Parshvanath chalisa
(Jaccard 0.08 vs the existing one) and IS kept.

Usage:
  python3 tools/map_jainsamaj_chalisa.py     # prints JSON of mapped items
"""

import json
from pathlib import Path

from map_jainsamaj import map_records

SRC = Path(__file__).parent / "jainsamaj_chalisas.json"

PLAN = [
    ("chalisa-shri-aadinath-ji",       "aadinath-chalisa",       "chalisa", "श्री आदिनाथ जी चालीसा",       "Shri Aadinath Ji Chalisa"),
    ("chalisa-shri-ajitnath-ji",       "ajitnath-chalisa",       "chalisa", "श्री अजितनाथ जी चालीसा",      "Shri Ajitnath Ji Chalisa"),
    ("chalisa-shri-sambhavnath-ji",    "sambhavnath-chalisa",    "chalisa", "श्री सम्भवनाथ जी चालीसा",     "Shri Sambhavnath Ji Chalisa"),
    ("chalisa-shri-abhinandannath-ji", "abhinandannath-chalisa", "chalisa", "श्री अभिनंदननाथ जी चालीसा",   "Shri Abhinandannath Ji Chalisa"),
    ("chalisa-shri-sumatinath-ji",     "sumatinath-chalisa",     "chalisa", "श्री सुमतिनाथ जी चालीसा",     "Shri Sumatinath Ji Chalisa"),
    ("chalisa-shri-padmabrabhu-ji",    "padmaprabhu-chalisa",    "chalisa", "श्री पद्मप्रभु जी चालीसा",    "Shri Padmaprabhu Ji Chalisa"),
    ("chalisa-shri-suparshvanath-ji",  "suparshvanath-chalisa",  "chalisa", "श्री सुपार्श्वनाथ जी चालीसा", "Shri Suparshvanath Ji Chalisa"),
    ("chalisa-shri-chandraprabhu-ji",  "chandraprabhu-chalisa",  "chalisa", "श्री चन्द्रप्रभु जी चालीसा",  "Shri Chandraprabhu Ji Chalisa"),
    ("chalisa-shri-pushpadanta-ji",    "pushpadant-chalisa",     "chalisa", "श्री पुष्पदन्त जी चालीसा",    "Shri Pushpadant Ji Chalisa"),
    ("chalisa-shri-shreyansanath-ji",  "shreyansnath-chalisa",   "chalisa", "श्री श्रेयांसनाथ जी चालीसा",  "Shri Shreyansnath Ji Chalisa"),
    ("chalisa-shri-vasupujya-ji",      "vasupujya-chalisa",      "chalisa", "श्री वासुपूज्य जी चालीसा",    "Shri Vasupujya Ji Chalisa"),
    ("chalisa-shri-vimalnath-ji",      "vimalnath-chalisa",      "chalisa", "श्री विमलनाथ जी चालीसा",      "Shri Vimalnath Ji Chalisa"),
    ("chalisa-shri-anantnath-ji",      "anantnath-chalisa",      "chalisa", "श्री अनन्तनाथ जी चालीसा",     "Shri Anantnath Ji Chalisa"),
    ("chalisa-shri-dharmanath-ji",     "dharmanath-chalisa",     "chalisa", "श्री धर्मनाथ जी चालीसा",      "Shri Dharmanath Ji Chalisa"),
    ("chalisa-shri-kunthunath-ji",     "kunthunath-chalisa",     "chalisa", "श्री कुन्थुनाथ जी चालीसा",    "Shri Kunthunath Ji Chalisa"),
    ("chalisa-shri-arahnath-ji",       "arahnath-chalisa",       "chalisa", "श्री अरहनाथ जी चालीसा",       "Shri Arahnath Ji Chalisa"),
    ("chalisa-shri-mallinath-ji",      "mallinath-chalisa",      "chalisa", "श्री मल्लिनाथ जी चालीसा",     "Shri Mallinath Ji Chalisa"),
    ("chalisa-shri-munisuvrata-ji",    "munisuvrat-chalisa",     "chalisa", "श्री मुनिसुव्रत जी चालीसा",   "Shri Munisuvrat Ji Chalisa"),
    ("chalisa-shri-naminath-ji",       "naminath-chalisa",       "chalisa", "श्री नमिनाथ जी चालीसा",       "Shri Naminath Ji Chalisa"),
    ("chalisa-shri-neminatha-ji",      "neminath-chalisa",       "chalisa", "श्री नेमिनाथ जी चालीसा",      "Shri Neminath Ji Chalisa"),
    ("chalisa-shri-parsvanath-ji",     "parshvanath-chalisa-badagaon", "chalisa", "श्री पार्श्वनाथ जी चालीसा (बड़ागांव)", "Shri Parshvanath Ji Chalisa (Badagaon)"),
    ("chalisa-shri-mahavira-ji",       "mahavir-chalisa",        "chalisa", "श्री महावीर जी चालीसा",       "Shri Mahavir Ji Chalisa"),
]


def main():
    print(json.dumps(map_records(SRC, PLAN), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
