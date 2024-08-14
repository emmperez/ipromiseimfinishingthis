// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

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
})