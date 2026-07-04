// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://mamun-traffic.github.io",

  // IMPORTANT for GitHub Pages project routing
  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },
});