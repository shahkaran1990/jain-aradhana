# Contributing to Jain Aradhana

Thanks for helping grow this collection. Most contributions are **adding new
devotional texts** (aartis, stavans, stutis, and more) or **filling in a
translation** for something that already exists. You don't need to know web
development to do either — all the content lives in one file.

- [What you'll need](#what-youll-need)
- [Where the content lives](#where-the-content-lives)
- [Add a new item](#add-a-new-item)
- [The fields, explained](#the-fields-explained)
- [Categories](#categories)
- [Languages](#languages)
- [Add a translation to an existing item](#add-a-translation-to-an-existing-item)
- [Preview your change locally](#preview-your-change-locally)
- [Common mistakes](#common-mistakes)
- [Submitting your change](#submitting-your-change)
- [Making changes appear on installed / offline devices](#making-changes-appear-on-installed--offline-devices)

---

## What you'll need

- A text editor (VS Code, or even GitHub's in-browser editor).
- Optional, for previewing: Python 3 (preinstalled on macOS/Linux) to run a
  tiny local web server.
- A GitHub account, if you want to open a pull request.

No build tools, no `npm install`, no framework. It's plain HTML/CSS/JS.

## Where the content lives

**Everything is in one file: [`data/content.js`](data/content.js).** You never
have to touch the HTML, CSS, or JavaScript to add content.

That file has two parts:

1. `CATEGORIES` — the list of content types (aarti, stavan, stuti, …). This
   controls the filter chips on the home page and the badge shown on each item.
2. `CONTENT` — an array (list) of items. Each item is one aarti / stavan / etc.

The home page lists every item with live search and category filters. The
reading page shows one item with a language tab per language that has text, plus
buttons to enlarge or shrink the text for comfortable recitation.

## Add a new item

1. Open [`data/content.js`](data/content.js).
2. Copy an existing block — everything from an opening `{` to its matching `},`.
3. Paste it into the `CONTENT` list (anywhere between the `[` and `]`).
4. Edit the fields using the template below.
5. Save. Refresh the site — the new item shows up automatically in the list,
   search, and the matching category filter.

### Template

```js
{
  id: "shri-shantinath-stavan",   // unique, lowercase, dashes instead of spaces
  type: "stavan",                 // one of the CATEGORIES keys (see below)
  title: {
    gu: "શ્રી શાંતિનાથ સ્તવન",
    hi: "श्री शांतिनाथ स्तवन",
    sa: "",                        // leave "" for a language you don't have yet
    en: "Shri Shantinath Stavan",
  },
  text: {
    gu: `પહેલી લીટી
બીજી લીટી

આ નવો ફકરો છે`,                  // real line breaks; a blank line = new stanza
    hi: `पहली पंक्ति
दूसरी पंक्ति`,
    sa: "",                        // empty => no Sanskrit tab shown for this item
    en: `First line
Second line`,
  },
},
```

## The fields, explained

| Field   | What it is | Rules |
|---------|------------|-------|
| `id`    | Unique identifier; appears in the page URL (`item.html?id=<id>`). | Lowercase letters, numbers, and dashes only. Must be **unique** across all items. |
| `type`  | The category. | Must be one of the keys in `CATEGORIES` (see [Categories](#categories)). |
| `title` | The name, per language. | An object with `gu`, `hi`, `sa`, `en`. Leave any language `""` if you don't have it. |
| `text`  | The verses, per language. | Same four keys. Wrap multi-line text in backticks. Leave `""` to hide that language's tab. |

A few important formatting rules for `text`:

- **Wrap multi-line verses in backticks** `` ` `` — not quotes. Backticks let you
  press Enter for real line breaks.
- **A blank line starts a new stanza.**
- The reader shows text exactly as written, so line breaks and spacing matter.

## Categories

The `type` field must match one of these keys, defined in `CATEGORIES` at the
top of `data/content.js`:

| Key           | Badge label   |
|---------------|---------------|
| `aarti`       | Aarti         |
| `stavan`      | Stavan        |
| `stuti`       | Stuti         |
| `chalisa`     | Chalisa       |
| `bhajan`      | Bhajan        |
| `stotra`      | Stotra        |
| `bhavna`      | Bhavna        |
| `paath`       | Paath         |
| `pratikraman` | Pratikraman   |

Need a new category? Add a `key: "Label"` line to the `CATEGORIES` object and it
automatically appears as a filter chip and a badge everywhere. Keep the key
lowercase and dash-free.

## Languages

Four languages are supported, in this order on the reading page:

| Key  | Language          | Tab label   |
|------|-------------------|-------------|
| `hi` | Hindi (Devanagari)| हिन्दी      |
| `gu` | Gujarati          | ગુજરાતી     |
| `sa` | Sanskrit          | संस्कृत      |
| `en` | English           | English     |

**A language whose `text` is `""` shows no tab for that item.** So you can add a
single language now and contribute the others later, one at a time. Every item
should have at least one language filled in.

## Add a translation to an existing item

1. Find the item in `data/content.js` (search for its `id` or title).
2. Fill in the empty `title` and `text` fields for the language you're adding.
3. Save and refresh — a new language tab appears for that item automatically.

You don't need to add all four languages. Filling in even one previously-empty
language is a valuable contribution.

## Preview your change locally

The pages read data from `data/content.js` using the URL, so serve them through
a tiny local web server rather than double-clicking the HTML file:

```bash
# run from inside the project folder
python3 -m http.server 8000
```

Then open **http://localhost:8000** and check:

- Your item appears in the home list and under the right category filter.
- Search finds it by title.
- The reading page shows a tab only for the languages you filled in.
- Line breaks and stanza spacing look right.

Press `Ctrl+C` in the terminal to stop the server.

> **Not seeing your change?** The app caches itself for offline use. Do a hard
> refresh (`Cmd+Shift+R` / `Ctrl+Shift+R`). See
> [the offline note](#making-changes-appear-on-installed--offline-devices) below.

## Common mistakes

- **Missing trailing comma** — keep the `,` after the closing `}` of each item
  block, and after each field.
- **Using quotes instead of backticks** for multi-line `text` — quotes can't
  span lines and will break the file.
- **A duplicate or spaced `id`** — ids must be unique and URL-safe (lowercase,
  numbers, dashes; no spaces or capitals).
- **A `type` that isn't a category key** — the badge will show the raw key and
  no filter will match it. Add the category first if it's new.
- **Unbalanced braces/brackets** — every `{` needs a `}`, and the whole list
  stays inside the `[ ... ]`. If the page goes blank, open the browser console
  (F12) — a syntax error in `content.js` is the usual cause.

## Submitting your change

If you have push access, commit and push:

```bash
git add data/content.js
git commit -m "Add Shri Shantinath Stavan"
git push
```

Otherwise, fork the repo, commit to a branch, and open a pull request describing
what you added (which item, which languages). GitHub Pages redeploys
automatically within about a minute of a change landing on the main branch.

Please double-check the accuracy of any text you add against a reliable source
before submitting.

## Making changes appear on installed / offline devices

The app is a PWA that caches itself so it works offline. Returning visitors and
anyone who "Added to Home Screen" keep seeing the **old cached version** until
the cache is refreshed. Whenever you change any file (content or code) and want
installed devices to pick it up, bump the version number once in
[`sw.js`](sw.js):

```js
var CACHE_VERSION = "v3";   // change to "v4", "v5", ... on each release
```

That tells every device to re-download and re-cache the latest files the next
time it opens the app online. New visitors always get the latest version
regardless.
