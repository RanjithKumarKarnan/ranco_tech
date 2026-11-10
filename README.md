# RanCoTech website

Marketing site for [rancotechnology.com](https://www.rancotechnology.com) — React 19, React Router 7, Tailwind CSS 4 and Vite 6, pre-rendered to static HTML for SEO and hosted on Hostinger.

## Commands

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build + pre-render into dist/
npm run lint
```

## How it works

- `npm run build` runs a normal Vite build, then a server build of `src/entry-server.jsx`, then `scripts/prerender.mjs`, which renders every route to HTML (`dist/about.html`, `dist/services/web-development.html`, …) with its own title, meta description, canonical URL, Open Graph tags and JSON-LD. It also writes `sitemap.xml`, `robots.txt` and `404.html`.
- `public/.htaccess` serves those files at clean URLs (`/about`), 301-redirects old URLs and `.html`/trailing-slash variants, and returns a real 404 for unknown pages.
- In the browser the pre-rendered HTML is hydrated, and `src/seo/usePageMeta.js` keeps the head tags in sync during in-app navigation.
- Pushing to `master` deploys automatically (`.github/workflows/deploy.yml`).

## Editing content

| What | Where |
| --- | --- |
| Phone, email, address, hours, socials, headline stats | `src/data/site.js` |
| Services (each one is a page at `/services/<slug>`) | `src/data/services.js` |
| Projects, client logos, testimonials, FAQ, process steps | `src/data/content.js` |
| Page titles and meta descriptions | `src/seo/meta.js` |
| Colours and fonts | `@theme` in `src/index.css` |

Adding a service to `src/data/services.js` automatically adds its page, menu links, sitemap entry and structured data.
Adding a new top-level page requires a route in `src/App.jsx` and an entry in `pages` in `src/seo/meta.js`.

## Contact form

Submissions go to Google Sheets and, once configured, by email via [Web3Forms](https://web3forms.com).
Paste your Web3Forms access key into `WEB3FORMS_KEY` in `src/lib/submitLead.js` to receive emails.
