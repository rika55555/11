import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bonusdom777.com',
  integrations: [sitemap()],
  output: 'static'
});
