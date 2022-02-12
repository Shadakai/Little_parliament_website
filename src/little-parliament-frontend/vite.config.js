import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
    rollupOptions: {
      external: ['@mui'],
      external: ['@mui/material'],
      external: ['mui'],
      }
  },
  plugins: [react()]
})
