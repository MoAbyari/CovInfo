<template lang='html'>
    <div class="info-row">
        <sui-statistics-group>
            <sui-statistic in-group color="red">
                <sui-statistic-value>
                    27
                </sui-statistic-value>
                <sui-statistic-label>
                    Total cases
                </sui-statistic-label>
            </sui-statistic>
        </sui-statistics-group>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
.info-row {
    display: flex;
    justify-content: center;
}
</style>
