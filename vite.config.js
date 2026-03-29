import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-vite-app/', // Replace 'my-vite-app' with your GitHub repo name
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
