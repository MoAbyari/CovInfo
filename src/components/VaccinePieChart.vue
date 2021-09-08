<template>
  <div>
    <h3>NSW Vaccinations</h3>
    <pie-chart v-if="loaded" :chartData="chartData"></pie-chart>
  </div>
</template>

<script>
import PieChart from './PieChart.vue';
import { api } from '../helpers/helpers'

export default {
  name: 'VaccinatedPieChart',
  components: { PieChart },
  data: () => ({
    loaded:false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false
    try {
      const data = await api.getVaccineInfo();
      this.chartData = data
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>