<template lang='html'>
  <div>
    <div class="ui cards">
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="../assets/Hospital.png">
      <div class="header">
        {{concurrentHospitalisations}}
        <h4>Total Admitted</h4>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="../assets/ICU.png">
      <div class="header">
        {{concurrentHospitalisationsIcu}}
        <h4>Total Cases In ICU</h4>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>

export default {
    name: 'CasesInfo',
    data(){
      return {
          concurrentHospitalisations: 1036,
          concurrentHospitalisationsIcu: 173
        }
    }
}
</script>

<style scoped>
div.ui.cards{
  margin: 0 30px;
}
</style>
