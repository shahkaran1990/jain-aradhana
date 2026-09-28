#!/usr/bin/env python3
"""Emit content.js-style JS item objects from the mapped JSON (stdin)."""
import json
import sys


def esc_backtick(s: str) -> str:
    # escape backslash, backtick, and ${ for template-literal safety
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def esc_dq(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def field(val: str) -> str:
    if "\n" in val:
        return "`" + esc_backtick(val) + "`"
    return '"' + esc_dq(val) + '"'


def main():
    items = json.load(sys.stdin)
    parts = []
    for it in items:
        t, x = it["title"], it["text"]
        parts.append(f"""  {{
    id: "{esc_dq(it['id'])}",
    type: "{it['type']}",
    title: {{
      gu: {field(t['gu'])},
      hi: {field(t['hi'])},
      sa: "",
      en: {field(t['en'])},
    }},
    text: {{
      gu: {field(x['gu'])},
      hi: {field(x['hi'])},
      sa: "",
      en: {field(x['en'])},
    }},
  }},""")
    print("\n".join(parts))


if __name__ == "__main__":
    main()
