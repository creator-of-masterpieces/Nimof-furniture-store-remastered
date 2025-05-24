import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    open: '/index.html',
    port: 5173
  }
});
