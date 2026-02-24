import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'YOUR_REPO_NAME' with your actual GitHub repository name
// e.g. if your repo URL is github.com/alice/barter-site, set base to '/barter-site/'
export default defineConfig({
  plugins: [react()],
  base: '/barter-site/',
  build: {
    rollupOptions: {
      input: {
        // The React app entry point
        app: './app.html',
      },
      output: {
        // Output the React app bundle under /app/
        entryFileNames: 'app/[name]-[hash].js',
        chunkFileNames: 'app/chunks/[name]-[hash].js',
        assetFileNames: 'app/assets/[name]-[hash][extname]',
      }
    },
    outDir: 'dist',
  }
})
