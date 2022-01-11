import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '/~': '.',
      '/@': './src',
    },
  },
  server: {
    open: true,
    hmr: {
      overlay: false,
    },
  },
  build: {
    chunkSizeWarningLimit: 2048,
  },
})
