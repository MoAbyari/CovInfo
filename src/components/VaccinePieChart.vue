<template>
  <div class="pie-chart">
    <div class= "pie-chart-title">
      <h2>NSW VACCINATION STATS</h2>
    </div>
    <div class="pie-chart-Ellipse2">
      <pie-chart v-if="loaded" :chartData="chartData"></pie-chart>
    </div>
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

<style>
  .pie-chart {
    max-height: 90vh;
    max-width: 90vh;
  } 

  .pie-chart-title {
    font-size: 21px;
    line-height: 25px;
    margin-top: 40px;

  }
  .pie-chart-Ellipse2 {
    margin-top: -10px;


  } 

</style>