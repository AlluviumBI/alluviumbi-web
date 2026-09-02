import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const EXCLUDED = [
  '/404',
  '/contact-success',
];

function isIndexable(page) {
  let path = page;
  try {
    const url = new URL(page);
    if (url.search) return false;
    path = url.pathname;
  } catch {
    /* page is already a path */
  }
  const clean = path.replace(/\/$/, '') || '/';
  if (clean.includes('/blog/tag')) return false;
  return !EXCLUDED.some((p) => clean === p || clean.endsWith(p));
}

export default defineConfig({
  site: 'https://alluviumbi.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: isIndexable,
    }),
  ],
  trailingSlash: 'never',
});
