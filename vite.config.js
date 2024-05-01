import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        now: './now.html',
        portfolio: './portfolio.html',
        blog: './blog.html',
        contact: './contact.html',
        // Add more entries for additional HTML files
      }
    }
  }
})
