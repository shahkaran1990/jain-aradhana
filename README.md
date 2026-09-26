# Jain Aradhana

Free, offline-ready collection of Jain devotional texts — **aartis, stavans, stutis, chalisas, bhajans, stotras, bhavnas, paaths & pratikraman** — in **Gujarati, Hindi, Sanskrit & English**. It is plain HTML/CSS/JS with no build step — a static PWA that runs on GitHub Pages for free.

- **Home page** — lists everything, with live search and category filters (one chip per category that has items, plus a ★ Favorites view).
- **Reading page** — language tabs (only for languages that have text) and larger/smaller text buttons for comfortable recitation.
- Gujarati and Devanagari (Hindi/Sanskrit) render via Google's Noto Sans fonts.
- **Interface language** — the app's own menus, buttons, and labels can be switched between **English / हिन्दी / ગુજરાતી** with the language switcher (separate from the per-item verse tabs). Your choice is remembered.
- **Dark / light theme** — a floating toggle switches themes and follows your device's setting by default. Your choice is remembered.
- **Favorites** — tap the star on any item to save it; find saved items under the **★ Favorites** filter. Favorites are stored on your device only.
- **Share** — share any item via your device's native share sheet, with a copy-link fallback.
- **Help & FAQ** — a floating **? Help** button opens an accessible FAQ (also localized to the interface language).
- **Privacy-friendly analytics (optional)** — consent-gated Google Analytics that loads nothing until you opt in, with an "Analytics preferences" link in the footer to change your choice anytime. Disabled entirely unless a Measurement ID is configured.
- **Installable app (PWA)** — on a phone you can "Add to Home Screen" and it opens like a real app (its own icon, no browser bars).
- **Works offline** — after the first visit, all pages, content, and fonts are cached on the device, so it keeps working with no internet.

### Installing it on a phone

- **Android (Chrome):** open the site, tap the **⬇︎ Install app** button (or the browser menu → *Install app / Add to Home screen*).
- **iPhone/iPad (Safari):** open the site, tap the **Share** button, then **Add to Home Screen**.

Once installed it runs offline. The first load needs internet so the content and
fonts can be saved; after that it opens even in airplane mode. When the device is
offline a small banner reads "You're offline — showing saved content."

---

## Part 1 — Initial setup

### 1. Preview it on your computer (optional)

The pages read data from `data/content.js` and use the URL, so serve them through a
tiny local web server rather than double-clicking the file:

```bash
# run this from inside the jain-site folder
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser. Press `Ctrl+C` in the terminal to stop.

### 2. Put it on GitHub

1. Create a new, empty repository on GitHub — for example `jain-aradhana`.
   Don't add a README/license there (this folder already has files).
2. From inside the `jain-site` folder, run:

   ```bash
   git init
   git add .
   git commit -m "Initial Jain Aradhana site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

   Replace `<your-username>` and `<your-repo>` with your own.

### 3. Turn on GitHub Pages (free hosting)

1. On GitHub, open your repository → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set branch to **`main`** and folder to **`/ (root)`**, then click **Save**.
4. Wait about a minute. Your site will be live at:

   ```
   https://<your-username>.github.io/<your-repo>/
   ```

That's it — the site is now public and free to host.

### Custom domain

This repo ships a `CNAME` file so GitHub Pages serves the site at
**https://aradhana.awskaran.co.uk**. To make it resolve, add one DNS record at
your registrar (names.co.uk → Manage DNS):

- One **CNAME** record: host `aradhana` → `<your-username>.github.io`

(A subdomain only needs this single CNAME — no A/AAAA records.)

Then, in **Settings → Pages**, wait for the domain to verify and tick
**Enforce HTTPS**. HTTPS is required for the offline/installable PWA to work.

---

## Part 2 — Adding a new item (aarti, stavan, and more)

> Want the full contributor guide (all categories, translations, common
> mistakes, pull requests)? See **[CONTRIBUTING.md](CONTRIBUTING.md)**. The
> quick version is below.

**All content lives in one file: `data/content.js`.** You don't touch any HTML.

### Steps

1. Open `data/content.js`.
2. Copy one of the existing blocks (everything from `{` to `},`).
3. Paste it into the list and edit the fields (see the template below).
4. Save the file.
5. Refresh the site — the new item appears automatically in the list and search.

### Template

```js
{
  id: "shri-shantinath-stavan",   // unique, lowercase, dashes-instead-of-spaces
  type: "stavan",                 // any key from CATEGORIES: aarti, stavan, stuti,
                                  // chalisa, bhajan, stotra, bhavna, paath, pratikraman
  title: {
    gu: "શ્રી શાંતિનાથ સ્તવન",
    hi: "श्री शांतिनाथ स्तवन",
    sa: "",                        // leave "" if you don't have this language yet
    en: "Shri Shantinath Stavan",
  },
  text: {
    gu: `પહેલી લીટી
બીજી લીટી

આ નવો ફકરો છે`,                  // real line breaks; blank line = new stanza
    hi: `पहली पंक्ति
दूसरी पंक्ति`,
    sa: "",                        // empty => no Sanskrit tab shown for this item
    en: `First line
Second line`,
  },
},
```

### Rules to remember

- **`id`** must be unique and URL-safe (letters, numbers, dashes). It shows up in the page's web address.
- **`type`** is one of the categories defined in the `CATEGORIES` map at the top of `data/content.js` (currently `aarti`, `stavan`, `stuti`, `chalisa`, `bhajan`, `stotra`, `bhavna`, `paath`, `pratikraman`) — that controls the badge and the filter chip. To add a new category, add a key to `CATEGORIES` and it appears everywhere automatically.
- Wrap multi-line verses in **backticks** `` ` `` (not quotes) so you can press Enter for line breaks. A blank line starts a new stanza.
- Any language left as `""` simply won't show a tab — so you can add translations later, one at a time.
- Keep the trailing comma after the closing `}` of each block.
- No rebuild or install is needed. Save, refresh, done. To publish the change online, commit and push:

  ```bash
  git add data/content.js
  git commit -m "Add Shri Shantinath Stavan"
  git push
  ```

  GitHub Pages redeploys automatically within a minute.

### Making updates show up on installed/offline devices

The app caches itself for offline use, so returning visitors keep seeing the old
cached version until the cache is refreshed. Whenever you change any file (content
or code) and want installed devices to pick it up, bump the version number once in
**`sw.js`**:

```js
var CACHE_VERSION = "v28";   // bump to "v29", "v30", ... on each release
```

That tells every device to re-download and re-cache the latest files the next time
it opens the app online. (New visitors always get the latest version regardless.)

---

## Project structure

```
jain-site/
├── index.html              # Home / listing page
├── item.html               # Single item viewer
├── manifest.webmanifest    # PWA metadata (name, icons, colors) for install
├── sw.js                   # Service worker — offline caching (bump version to release)
├── .nojekyll               # Tells GitHub Pages to serve files as-is
├── CNAME                   # Custom domain for GitHub Pages
├── CONTRIBUTING.md         # Full contributor guide
├── .htmlvalidate.json      # HTML validation config (CI)
├── eslint.config.mjs       # JS lint config (CI)
├── linkinator.config.json  # Link-checker config (CI)
├── .github/                # CI workflow + issue / PR templates
├── assets/
│   ├── style.css           # All styling (incl. mobile + PWA UI, dark theme)
│   ├── i18n.js             # UI localisation + language switcher (loads first)
│   ├── theme.js            # Dark / light theme toggle
│   ├── home.js             # Home page logic (search + filter + favorites)
│   ├── item.js             # Detail page logic (language tabs, text size, favorite, share)
│   ├── help.js             # Floating Help & FAQ modal
│   ├── analytics.js        # Consent-gated Google Analytics (GA4)
│   ├── pwa.js              # Registers the service worker + install/offline UI
│   ├── icon.svg            # App icon (source)
│   ├── icon-maskable.svg   # Maskable app icon (source)
│   ├── jain-symbol.svg     # Jain symbol artwork
│   ├── icon-*.png          # Generated app icons (192, 512, maskable)
│   ├── favicon-32.png      # Browser tab favicon
│   └── apple-touch-icon.png
└── data/
    └── content.js          # <-- All the content lives here
```

## A note on the content

The texts currently included are traditional devotional compositions added as samples
so you can see the layout. Please review them for accuracy and replace them with your
own verified versions before sharing the site widely.
