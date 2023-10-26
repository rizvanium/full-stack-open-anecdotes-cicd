import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
    baseUrl: 'http://localhost:3000',
    env: {
      BACKEND_URL: 'http://localhost:3001',
    },
  },
})
