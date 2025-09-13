import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    viteCompression({ algorithm: 'gzip' }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
})
