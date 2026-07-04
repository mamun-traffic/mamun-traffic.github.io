import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://mamun-traffic.github.io",
  base: "/",   // IMPORTANT for USER pages (your case)
  vite: {
    plugins: [tailwindcss()],
  },
});