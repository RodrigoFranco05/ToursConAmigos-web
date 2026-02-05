import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://rodrigofranco05.github.io/ToursConAmigos-web/',
  server: {
    port: 3000,
    open: true
  }
})
