import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const EXCLUDED = [
  '/404',
  '/contact-success',
];

function isIndexable(page) {
  let pathName = page;
  try {
    const url = new URL(page);
    if (url.search) return false;
    pathName = url.pathname;
  } catch {
    /* page is already a path */
  }
  const clean = pathName.replace(/\/$/, '') || '/';
  if (clean.includes('/blog/tag')) return false;
  return !EXCLUDED.some((p) => clean === p || clean.endsWith(p));
}

function singleSitemapUrlset() {
  return {
    name: 'single-sitemap-urlset',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const dest = fileURLToPath(dir);
        const zero = path.join(dest, 'sitemap-0.xml');
        const indexFile = path.join(dest, 'sitemap-index.xml');
        const out = path.join(dest, 'sitemap.xml');
        if (fs.existsSync(zero)) {
          fs.copyFileSync(zero, out);
          fs.unlinkSync(zero);
        }
        if (fs.existsSync(indexFile)) fs.unlinkSync(indexFile);
      },
    },
  };
}

const buildLastmod = new Date();

export default defineConfig({
  site: 'https://www.alluviumbi.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: isIndexable,
      lastmod: buildLastmod,
      serialize(item) {
        const u = new URL(item.url);
        if (u.pathname === '/' || u.pathname === '') {
          item.url = 'https://www.alluviumbi.com/';
        } else {
          u.pathname = u.pathname.replace(/\/+$/, '');
          item.url = u.origin + u.pathname;
        }
        item.lastmod = buildLastmod;
        return item;
      },
    }),
    singleSitemapUrlset(),
  ],
  trailingSlash: 'never',
});
