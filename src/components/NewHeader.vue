<template>
    <div class="info-section">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
            <p>NSW COVID information website</p>
        </div>
        <h2>NSW Covid Info</h2>
        <div class="section">
            <div class="cards">
                <p>Today's cases</p>
                <p>{{ info.NewCases }}</p>
            </div>
        </div>
       
    </div>
</template>

<script>

import { api } from '../helpers/helpers'

export default {
    name: 'Header',
    data() {
        return {
            info: []
        }
    },
    async mounted() {
        this.info = await api.getInfo();
    }
}
</script>

<style scoped>
.info-section {
    background-color: #0058A9;
    color: white;
}

.logo img {
    width: 100px;
    margin-top: 50px;
    text-align: center;
}

.section {
    padding: 15px;
}

.cards {
    background-color: #E1FAD8;
    border-radius: 3%;
    display: flex;
    justify-content: center;
    color: black;
    align-items: center;
    padding: 20px;
}

.catrds p {
    margin: 0;
}
</style>
