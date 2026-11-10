// Renders every route to static HTML after `vite build`, so search engines and social previews
// get real content and per-page meta tags. Also writes sitemap.xml, robots.txt and 404.html.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const { render, prerenderRoutes, SITE } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

// Pages are written as about.html etc.; public/.htaccess serves them at clean URLs (/about)
const outputFile = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

for (const route of [...prerenderRoutes, '/404']) {
  const { html, head } = render(route);
  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  const file = path.join(distDir, outputFile(route));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
  console.log(`  prerendered ${route.padEnd(40)} → dist/${outputFile(route)}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderRoutes
  .map((route) => `  <url><loc>${SITE.url}${route === '/' ? '/' : route}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log(`  wrote sitemap.xml (${prerenderRoutes.length} URLs) and robots.txt`);
