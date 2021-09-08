<template lang='html'>
  <div>
    <div class="ui cards">
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="../assets/Hospital.png">
      <div class="header">
        {{info.concurrentHospitalisations}}
        <h4>Total Admitted</h4>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="../assets/ICU.png">
      <div class="header">
        {{info.concurrentHospitalisationsIcu}}
        <h4>Total Cases In ICU</h4>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="../assets/Tested.png">
      <div class="header">
        {{info.Tested}}
        <h4>Total Tested</h4>
        <!-- <h7>Today:{{info.Test_24hrs}} </h7> -->
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
    name: 'CasesInfo',
    data(){
      return {
        info:[]
        }
    },
    async mounted() {
      this.info = await api.getInfo();
    }
}
</script>

<style scoped>
div.ui.cards{
  margin: 0 30px;
}
</style>
