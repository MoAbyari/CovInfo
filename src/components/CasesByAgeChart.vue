<template>
  <div>
    <h2>Cases by age group</h2>
    <bar-chart v-if="loaded" :chartData="chartData"></bar-chart>
  </div>
</template>

<script>
import BarChart from './BarChart.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'CasesBarChart',
  components: { BarChart },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false
    try {
      const data = await api.getCasesByAge();
      this.chartData = data
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

