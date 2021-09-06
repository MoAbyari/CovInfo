
<script>
import { Pie } from 'vue-chartjs';
import { api } from '../helpers/helpers'


export default {
   extends: Pie,
   data() {
      return {
        info:[],
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
            data: [7, 19, 3]
          }]
        },
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
   },
   async mounted () {
      this.renderChart(this.chartData, this.options)
      this.info =  this.info = await api.getVaccineInfo();
   },
}
</script>

