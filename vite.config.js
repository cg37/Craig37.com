import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

const pathResolve = (dir) =>  resolve(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    host: '0.0.0.0',
    port: '3031',
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    }
  }
})
