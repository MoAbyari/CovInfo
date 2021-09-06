<template lang='html'>
    <div>
        <Header />
        <hr>
        <CasesInfo />
        <hr>
        <VaccinatedChart />
        <hr>
        <CasesByAgeChart />

    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CasesInfo from '@/components/CasesInfo.vue';
import VaccinatedChart from '@/components/VaccinatedChart.vue';
import CasesByAgeChart from '@/components/CasesByAgeChart.vue';

export default {
    name: 'Home',
    components: {
        Header,
        CasesInfo,
        VaccinatedChart,
        CasesByAgeChart,
    }
}
</script>

<style scoped>

</style>
