<template lang='html'>
    <div>
        <Header />
        <hr>
        <CasesInfo />
        <hr>
        <VaccinatedChart />
        <hr>
        <CasesByAgeChart />
        <hr>
        <LeafletMap />

    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CasesInfo from '@/components/CasesInfo.vue';
import VaccinatedChart from '@/components/VaccinatedChart.vue';
import CasesByAgeChart from '@/components/CasesByAgeChart.vue';
import LeafletMap from '@/components/LeafletMap.vue';

export default {
    name: 'Home',
    components: {
        Header,
        CasesInfo,
        VaccinatedChart,
        CasesByAgeChart,
        LeafletMap
    }
}
</script>

<style scoped>

</style>
