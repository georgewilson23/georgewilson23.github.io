import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://georgewilson23.github.io',
  integrations: [tailwind()],
});
