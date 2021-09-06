<template lang='html'>
    <div>
        <Header />
        <hr>
        <CasesInfo />
        <hr>
        <VaccinePieChart />
        <hr>
        <CasesByAgeChart />

    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CasesInfo from '@/components/CasesInfo.vue';
import VaccinePieChart from '@/components/VaccinePieChart.vue';
import CasesByAgeChart from '@/components/CasesByAgeChart.vue';


export default {
    name: 'Home',
    components: {
        Header,
        CasesInfo,
        CasesByAgeChart,
        VaccinePieChart,
    }
}
</script>

<style scoped>

</style>
