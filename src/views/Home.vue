<template lang='html'>
    <div class="home">
        <NewHeader />
        <hr>
        <CasesInfo />
        <LeafletMap />
        <VaccinePieChart />
        <CasesByAgeChart />
        <DeathsByAgeChart />  
    </div>
</template>

<script>
import NewHeader from '@/components/NewHeader.vue';
import CasesInfo from '@/components/CasesInfo.vue';
import VaccinePieChart from '@/components/VaccinePieChart.vue';
import CasesByAgeChart from '@/components/CasesByAgeChart.vue';
import DeathsByAgeChart from '@/components/DeathsByAgeChart.vue';
import LeafletMap from '@/components/LeafletMap.vue';


export default {
    name: 'Home',
    components: {
        NewHeader,
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
