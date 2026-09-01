import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alluviumbi.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  trailingSlash: 'never',
});
