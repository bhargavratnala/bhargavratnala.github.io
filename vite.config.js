import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import { globSync } from 'glob'

const __dirname = dirname(fileURLToPath(import.meta.url))

// find all google*.html files
const googleHtmlFiles = globSync('google*.html', { cwd: __dirname })

// convert to Rollup input format
const inputs = {
  main: resolve(__dirname, 'index.html'),
}

googleHtmlFiles.forEach((file) => {
  inputs[file.replace('.html', '')] = resolve(__dirname, file)
})

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: inputs,
    },
  },
})
