
<script>
import { Pie } from 'vue-chartjs';

export default {
   extends: Pie,
   data() {
    const population = this.$attrs.chartData.reduce((n, {population}) => n + population, 0);
    const dose1 = this.$attrs.chartData.reduce((n, {dose1_count}) => n + dose1_count, 0);
    const dose2 = this.$attrs.chartData.reduce((n, {dose2_count}) => n + dose2_count, 0);
    const dose1perc = Math.floor( (dose1 - dose2) / population * 100);
    const dose2perc = Math.floor(dose2 / population * 100);
    const nonVaccinated = Math.floor( (population - dose1) / population * 100);

      return {
        chartData: {
          labels: ["Non-Vaccinated (%)", "Fully Vaccinated (%)", "1st-dose Vaccinated (%)"
          ],
          datasets: [{
            label: 'Pie Chart',
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132,0.7)',
              'rgba(54, 162, 235,0.7)',
              'rgba(255, 206, 86,0.7)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            pointBorderColor: '#2554FF',
            data: [nonVaccinated, dose2perc, dose1perc]
          }]
        },
        options: {
          legend: {
            display: true,
            position: 'bottom'
          },
          layout:{
            padding: 15
          },
          responsive: true,
          maintainAspectRatio: false,
        }

      }
   },
   async mounted () {
      this.renderChart(this.chartData, this.options);
   },
}
</script>

