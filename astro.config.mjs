// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  // Speaker and sponsor images come from Firebase Storage; they are downloaded
  // and optimized at build time so visitors never hit Storage.
  image: {
    domains: ['firebasestorage.googleapis.com'],
  },

  vite: {
    plugins: [tailwindcss()]
  }
});