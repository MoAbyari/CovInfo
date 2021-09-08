<template>
  <div>
    <h2>Lives lost by age group</h2>
    <bar-chart v-if="loaded" :chartData="chartData"></bar-chart>
  </div>
</template>

<script>
import BarChart from './BarChart.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'DeathsBarChart',
  components: { BarChart },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false
    try {
      const data = await api.getDeathsByAge();
      this.chartData = data
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

