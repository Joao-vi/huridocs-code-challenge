import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables Jest-like global test functions (e.g., `describe`, `it`)
    environment: 'node', // Simulates a DOM environment (useful for React components)
    include: ['tests/**/*.{test,spec}.{js,ts,jsx,tsx}'], // Match test files
    coverage: {
      reporter: ['text', 'json', 'html'], // Coverage reports
    },
  },
})
