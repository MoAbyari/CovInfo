<template lang='html'>
    <div>
        <Header />
        <hr>
        <CasesICU />

    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CasesICU from '@/components/CasesICU.vue';

export default {
    name: 'Home',
    components: {
        Header,
        CasesICU,
    }
}
</script>

<style scoped>

</style>
