# Planz for Metal Scope — ERP Proposal Site

A static, hostable website. No build step, no dependencies.

```
index.html
css/style.css
js/main.js
favicon.svg
```

## Run locally

Open `index.html` directly in a browser, or serve it:

```bash
npx serve .
```

## Host it (pick one)

**Netlify** — drag the whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop). Live in seconds, gets you a free `*.netlify.app` URL. Add a custom domain later from Site settings.

**Vercel** — `npx vercel` inside this folder, follow the prompts.

**GitHub Pages** — push this folder to a repo, then in Settings → Pages set the source to the `main` branch root.

**Any regular web host / cPanel** — upload the 4 files above via FTP/File Manager into your domain's `public_html` (or subdomain folder). No server-side code needed, it's plain HTML/CSS/JS.

## Editing content

Everything is in `index.html` — copy, pricing, table rows. Colors and layout are in `css/style.css` (CSS custom properties at the top control the palette, including a dark mode). Scroll reveal and parallax logic is in `js/main.js`.
