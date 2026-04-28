import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/wwElement.vue',
      name: 'EChartsBar',
      fileName: 'weweb-echarts-bar',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue', 'echarts', 'vue-echarts'],
      output: {
        globals: {
          vue: 'Vue',
          echarts: 'echarts',
          'vue-echarts': 'VueECharts'
        }
      }
    }
  }
})
