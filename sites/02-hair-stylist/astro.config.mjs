import { defineConfig } from 'astro/config';

export default defineConfig({
  // Production URL (used for canonical and Open Graph URLs).
  site: 'https://casa-aurora-cabelos.vercel.app',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  image: { layout: 'constrained', responsiveStyles: false },
});
