// Dedup check: compare newly-mapped jainkart items against existing content.js.
// Flags (a) id collisions, (b) high lyric-token Jaccard against any existing
// item in ANY language field, (c) identical/near-identical titles.
const vm = require("vm");
const fs = require("fs");
const path = require("path");

const HERE = __dirname;
const ROOT = path.join(HERE, "..");

function loadContent() {
  const src = fs.readFileSync(path.join(ROOT, "data/content.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(
    src + "\n;window.__C=CONTENT;",
    ctx
  );
  return ctx.window.__C;
}

// token set from Devanagari/Gujarati text: split on non-letter, keep len>=2
function tokens(s) {
  if (!s) return new Set();
  return new Set(
    s
      .replace(/[^\u0900-\u0AFF\u0020-\u007E]/g, " ")
      .split(/\s+/)
      .map((w) => w.trim())
      .filter((w) => w.length >= 2)
  );
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return inter / (a.size + b.size - inter);
}

function normTitle(t) {
  return (t || "")
    .toLowerCase()
    .replace(/[^\u0900-\u0AFF a-z0-9]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const existing = loadContent();
const mapped = JSON.parse(fs.readFileSync(path.join(HERE, "jainkart_mapped.json"), "utf8"));

const existingIds = new Set(existing.map((x) => x.id));
// Precompute existing token sets (hi+gu+en combined and per-lang) & titles.
const existingSig = existing.map((x) => ({
  id: x.id,
  type: x.type,
  titles: [x.title?.hi, x.title?.gu, x.title?.en].map(normTitle).filter(Boolean),
  hi: tokens(x.text?.hi),
  gu: tokens(x.text?.gu),
}));

let flags = 0;
for (const m of mapped) {
  const notes = [];
  if (existingIds.has(m.id)) notes.push(`ID COLLISION with existing "${m.id}"`);

  const mHi = tokens(m.text.hi);
  const mGu = tokens(m.text.gu);
  const mTitles = [m.title.hi, m.title.gu, m.title.en].map(normTitle).filter(Boolean);

  let best = { score: 0, id: null, how: "" };
  for (const e of existingSig) {
    const jHi = jaccard(mHi, e.hi);
    const jGu = jaccard(mGu, e.gu);
    // also cross: our gu vs their hi and vice-versa (script-shifted dupes)
    const jCross1 = jaccard(mHi, e.gu);
    const jCross2 = jaccard(mGu, e.hi);
    const s = Math.max(jHi, jGu, jCross1, jCross2);
    if (s > best.score) best = { score: s, id: e.id, how: `hi=${jHi.toFixed(2)} gu=${jGu.toFixed(2)} x1=${jCross1.toFixed(2)} x2=${jCross2.toFixed(2)}` };
    // title exact match
    for (const mt of mTitles)
      for (const et of e.titles)
        if (mt && mt === et) notes.push(`TITLE match "${mt}" == existing "${e.id}"`);
  }
  if (best.score >= 0.5) notes.push(`LYRIC Jaccard ${best.score.toFixed(2)} vs "${best.id}" (${best.how})`);

  if (notes.length) {
    flags++;
    console.log(`\n[FLAG] ${m.id}`);
    notes.forEach((n) => console.log("   - " + n));
  }
}
console.log(`\nChecked ${mapped.length} mapped items against ${existing.length} existing. ${flags} flagged.`);
