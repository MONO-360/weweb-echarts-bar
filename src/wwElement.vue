<template>
  <div ref="chartEl" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  content: { type: Object, default: () => ({}) }
})

const chartEl = ref(null)
let chart = null

onMounted(() => {
  chart = echarts.init(chartEl.value)
  renderChart()
  window.addEventListener('resize', () => chart?.resize())
})

onUnmounted(() => {
  chart?.dispose()
})

watch(() => props.content.data, renderChart, { deep: true })

function renderChart() {
  if (!chart) return
  const data = props.content.data || []
  chart.setOption({
    tooltip: { trigger: 'axis' },
    legend: { data: ['Budget', 'Actual'] },
    xAxis: { type: 'category', data: data.map(d => d.portfolio_name || '') },
    yAxis: { type: 'value' },
    series: [
      { name: 'Budget', type: 'bar', data: data.map(d => d.total_budget_m || 0), itemStyle: { color: '#7C3AED' } },
      { name: 'Actual', type: 'bar', data: data.map(d => d.actual_spend_m || 0), itemStyle: { color: '#14B8A6' } }
    ]
  })
}
</script>
