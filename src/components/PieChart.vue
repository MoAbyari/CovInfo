
<script>
import { Pie } from 'vue-chartjs';

export default {
   extends: Pie,
   data() {
     const dose1 = this.$attrs.chartData.reduce((n, {dose1_count}) => n + dose1_count, 0);
     const dose2 = this.$attrs.chartData.reduce((n, {dose2_count}) => n + dose2_count, 0);

    //  const dose1perc = (dose1 / population * 100);
    //  const dose2 = (this.$attrs.chartData.reduce((n, {dose2_count}) => n + dose2_count, 0) / population * 100);
    //  const nonVaccinated = (population - (dose1 + dose2)) / population * 100 ;
     const population = this.$attrs.chartData.reduce((n, {population}) => n + population, 0);
     const nonVaccinated = population - (dose1 + dose2);

      return {
        chartData: {
          labels: ["Non-Vaccinated", "Fully Vaccinated", "1st Dose-Vaccinated"
          ],
          datasets: [{
            label: 'Pie Chart',
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            pointBorderColor: '#2554FF',
            data: [nonVaccinated,dose2,dose1]
          }]
        },
        options: {
          legend: {
            display: true,
            position: 'bottom'
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
   },
   async mounted () {
      this.renderChart(this.chartData, this.options)
   },
}
</script>

