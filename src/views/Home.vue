<template lang='html'>
    <div>
        <Header />
        <hr>
        <CasesInfo />

    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CasesInfo from '@/components/CasesInfo.vue';

export default {
    name: 'Home',
    components: {
        Header,
        CasesInfo,
    }
}
</script>

<style scoped>

</style>
