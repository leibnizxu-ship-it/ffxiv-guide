import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/ffxiv-guide/' : '/'
  return {
    plugins: [vue()],
    base,
    resolve: {
      alias: { '@': resolve(__dirname, 'src') }
    }
  }
})
