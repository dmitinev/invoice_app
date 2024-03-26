import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      assets: '/src/assets',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/_mixins.scss";',
      },
    },
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
  base: '/invoice_app/',
});

