<template>
  <div>
    <h1> Vaccinated in NSW </h1>
    <div>
      <JSCharting :options="chartOptions" class="columnChart"></JSCharting>
    </div>
  </div>

</template>

<script>
import { api } from '../helpers/helpers';
import JSCharting from 'jscharting-vue';



export default {

   name: 'pieChart',
   data() {
      return {
         info:[],
         chartOptions: {
            type: 'pie',
            // title: { label: { text: 'Vaccinated in NSW' },position:'center'},
            legend: {
            position: 'inside bottom'
            },
            series: [
               {
                  name: 'NSW',
                  points: [
                     { x: 'Fully Vaccinated', y: 60, color: "#21d6b6"},
                     { x: 'Received 1st ', y: 30,color: "#456aeb"},
                     { x: 'Non-vaccinated', y: 50,color: "#c442af" }
                  ]

               }
            ]
         }
      }
   },
   components: {
      JSCharting
   },
   async mounted() {
      this.info = await api.getInfo();
    }
}
</script>

<style>
.pieChart {
    height: 400px;
}
</style>
