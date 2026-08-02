import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for GitHub Pages deployment.
export default defineConfig({
  // Repository subpath base URL.
  base: '/ConnecXia/',
  // React plugin integration.
  plugins: [react()],
})
