<template>
  <div ref="chartRef" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  content: { type: Object, default: () => ({}) }
})

const chartRef = ref(null)
let chart = null

function renderChart(data) {
  if (!chart || !data?.data) return
  const rows = data.data
  chart.setOption({
    tooltip: {},
    xAxis: { type: 'category', data: rows.map(r => r.portfolio_name) },
    yAxis: { type: 'value' },
    series: [
      { name: 'Budget (€M)', type: 'bar', data: rows.map(r => r.total_budget_m), itemStyle: { color: '#7C3AED' } },
      { name: 'Actual Spend (€M)', type: 'bar', data: rows.map(r => r.actual_spend_m), itemStyle: { color: '#14B8A6' } }
    ]
  })
}

onMounted(() => {
  chart = echarts.init(chartRef.value)
  renderChart(props.content)
})

watch(() => props.content, renderChart, { deep: true })
</script>
