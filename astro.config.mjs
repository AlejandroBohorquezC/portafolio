import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alejandrobohorquez.dev',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
