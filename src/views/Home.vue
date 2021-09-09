<template lang='html'>
    <div>
        <Header />
        <CasesInfo />
        <LeafletMap />
        <VaccinePieChart />
        <CasesByAgeChart />
        <DeathsByAgeChart />  
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CasesInfo from '@/components/CasesInfo.vue';
import VaccinePieChart from '@/components/VaccinePieChart.vue';
import CasesByAgeChart from '@/components/CasesByAgeChart.vue';
import DeathsByAgeChart from '@/components/DeathsByAgeChart.vue';
import LeafletMap from '@/components/LeafletMap.vue';


export default {
    name: 'Home',
    components: {
    Header,
    CasesInfo,
    CasesByAgeChart,
    LeafletMap,
    VaccinePieChart,
    DeathsByAgeChart,
    }
}
</script>

<style scoped>

</style>
