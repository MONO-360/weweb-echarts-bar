<template>
  <v-chart :option="option" autoresize style="height: 100%; width: 100%; min-height: 300px;" />
</template>

<script setup>
import { computed } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart from 'vue-echarts'

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent, LegendComponent])

const props = defineProps({
  content: { type: Object, default: () => ({}) }
})

const option = computed(() => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    backgroundColor: '#1F2937',
    borderColor: 'transparent',
    textStyle: { color: '#F9FAFB', fontSize: 12 }
  },
  legend: { bottom: 0, textStyle: { color: '#6B7280', fontSize: 11 } },
  grid: { left: 16, right: 16, top: 16, bottom: 48, containLabel: true },
  xAxis: {
    type: 'category',
    data: (props.content.data || []).map(r => r.portfolio_name),
    axisLabel: { color: '#9CA3AF', fontSize: 10, rotate: 15 }
  },
  yAxis: {
    type: 'value',
    axisLabel: { color: '#9CA3AF', formatter: v => '€' + v + 'M' },
    splitLine: { lineStyle: { color: '#F3F4F6' } }
  },
  series: [
    {
      name: 'Budget (€M)',
      type: 'bar',
      data: (props.content.data || []).map(r => r.total_budget_m),
      itemStyle: { color: '#7C3AED', borderRadius: [4, 4, 0, 0] },
      barMaxWidth: 32
    },
    {
      name: 'Actual Spend (€M)',
      type: 'bar',
      data: (props.content.data || []).map(r => r.actual_spend_m),
      itemStyle: { color: '#14B8A6', borderRadius: [4, 4, 0, 0] },
      barMaxWidth: 32
    }
  ]
}))
</script>
