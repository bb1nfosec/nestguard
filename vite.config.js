import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages at https://bb1nfosec.github.io/nestguard/
export default defineConfig({
  base: '/nestguard/',
  plugins: [react()],
})
