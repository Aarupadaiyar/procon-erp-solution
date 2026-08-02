# Planz for Metal Scope: ERP + Website Bundle Proposal

A single self-contained page. No build step, no dependencies, no external files.

```
index.html
favicon.svg
```

One page, three bundles, reached by anchor links (no separate pages to host):

- `#foundation` — ERP Foundation + Website Foundation, Rs 8,50,000
- `#digital-first` — ERP Foundation + Website Growth, Rs 9,75,000
- `#growth` — ERP Operations + Website Growth, Rs 12,75,000 (recommended)

## Run locally

Open `index.html` directly in a browser, or serve it:

```bash
npx serve .
```

## Host it (pick one)

**Netlify** — drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop). Live in seconds, gets you a free `*.netlify.app` URL.

**Vercel** — `npx vercel` inside this folder, follow the prompts.

**GitHub Pages** — push this folder to a repo, then in Settings, Pages, set the source to the `main` branch root.

**Any regular web host / cPanel** — upload `index.html` and `favicon.svg` via FTP/File Manager into your domain's `public_html`. No server-side code needed.

## Editing content

Everything (copy, pricing, colors, layout, scroll animation) lives inline in `index.html`. CSS custom properties near the top of the `<style>` block control the palette, including a dark mode.
