// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        culture: resolve(__dirname, 'culture/index.html'),
        upcoming: resolve(__dirname, 'upcoming/index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
      },
    },
  },
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 95
      }
    })
  ]
})