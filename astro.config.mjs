import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import path from 'path';

// https://astro.build/config
export default defineConfig({
   integrations: [preact({ compat: true })],
   vite: {
      plugins: [tailwindcss()],
      resolve: {
         alias: {
            '@': path.resolve('./src'),
         },
      },
      optimizeDeps: {
         include: ['gsap'],
      },
   },
   devToolbar: {
      enabled: false,
   },
});
