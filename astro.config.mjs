import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Le decimos a Astro que pase esta config a Vite
  vite: {
    server: {
      hmr: false, // Ahora sí: Desactiva la recarga automática
    },
  },
});