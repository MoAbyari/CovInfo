<template>
 <div id="container">
   <div id="mapContainer"></div>
 </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { api } from '../helpers/helpers';
import L from "leaflet";

export default {
    name: "Map",
    data() {
        return{
            NSWGeoJson: [],
            center: [-32.5098,147.4805]
        }
    },
    methods: {
        setupLeafletMap: function () {
            const mapDiv = L.map("mapContainer").setView(this.center, 13);
            L.tileLayer(
                "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
                {
                    attribution:
                    'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 16,
                    id: "mapbox/streets-v11",
                    accessToken: "XXX",
                }).addTo(mapDiv);

            L.geoJson(this.NSWGeoJson).addTo(mapDiv);

        },
    },
    async mounted() {
        this.NSWGeoJson = await api.getNSWGeoJson();
        this.setupLeafletMap();
    }
};
</script>

<style scoped>
    #mapContainer {
        width: 800px;
        height: 90vh;
        margin: 0 auto;
    }
</style>