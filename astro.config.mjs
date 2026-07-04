import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mamun-traffic.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  }
});