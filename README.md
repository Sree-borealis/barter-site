# barter — Deployment Guide

This project deploys two things to GitHub Pages:
- **Landing page** → `https://YOUR_USERNAME.github.io/barter-site/`
- **React app** → `https://YOUR_USERNAME.github.io/barter-site/app/index.html`

---

## One-time setup (takes ~10 minutes)

### Step 1 — Install Node.js
Download from https://nodejs.org (choose the LTS version) and install it.

### Step 2 — Create a GitHub repo
1. Go to https://github.com and sign in (or create a free account)
2. Click **"New repository"**
3. Name it exactly: `barter-site`
4. Leave it **Public**, click **Create repository**

### Step 3 — Update your repo name in vite.config.js
Open `vite.config.js` and confirm the `base` line matches your repo name:
```js
base: '/barter-site/',
```
If you named your repo something different, change it here.

### Step 4 — Open a terminal in this folder
On Mac: Right-click the `barter-site` folder → "New Terminal at Folder"
On Windows: Shift+right-click → "Open PowerShell window here"

### Step 5 — Install dependencies
```bash
npm install
```

### Step 6 — Push to GitHub
Replace `YOUR_USERNAME` with your actual GitHub username:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/barter-site.git
git push -u origin main
```

### Step 7 — Deploy to GitHub Pages
```bash
npm run deploy
```
This builds the project and pushes it to a `gh-pages` branch automatically.

### Step 8 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Branch", select `gh-pages` → click **Save**
4. Wait 2–3 minutes

### Step 9 — Your site is live! 🎉
- Landing page: `https://YOUR_USERNAME.github.io/barter-site/`
- Barter app:   `https://YOUR_USERNAME.github.io/barter-site/app/index.html`

---

## Updating the site later
Whenever you make changes, just run:
```bash
npm run deploy
```
That's it — it rebuilds and redeploys everything.

---

## Project structure
```
barter-site/
├── public/
│   └── index.html          ← Landing page (served as-is)
├── src/
│   ├── main.jsx            ← React entry point
│   └── barter-app.jsx      ← The barter React app
├── app.html                ← HTML shell for the React app
├── vite.config.js          ← Build config
├── package.json            ← Dependencies & scripts
└── README.md               ← This file
```
