import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  base: process.env.NODE_ENV === 'production' ? '/upstreamlabs-github101-chenlongos-marketing/' : '/',
})