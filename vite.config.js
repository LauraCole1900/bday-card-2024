import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: "/bday-card-2024",
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
