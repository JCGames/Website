import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      "@components": fileURLToPath(new URL("./src/components", import.meta.url))
    }
  }
})
