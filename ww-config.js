// v3 — bindable data property
export default {
  editor: {
    label: { en: 'ECharts Bar Chart' },
    icon: 'fontawesome/solid/chart-bar',
  },
  properties: {
    data: {
      label: { en: 'Chart Data' },
      type: 'Array',
      section: 'settings',
      bindable: true,
      defaultValue: [],
    }
  }
}
