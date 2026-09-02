import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://oreoncz.github.io',
  base: '/portfolioWeb',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
