<template>
 <div id="container">
   <div id="mapContainer"></div>
 </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
    name: "Map",
    data() {
        return{
            center: [-32.5098,147.4805]
        }
    },
    methods: {
        setupLeafletMap: function () {
            const mapDiv = L.map("mapContainer").setView(this.center, 6);
            L.tileLayer(
                "https://api.mapbox.com/styles/v1/moabyari/ckt9sc7n2689r18pgaswrn4nl/tiles/{z}/{x}/{y}?access_token={accessToken}",
                {
                    attribution:
                    'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 16,
                    id: "moabyari.do755eqs",
                    accessToken: "pk.eyJ1IjoibW9hYnlhcmkiLCJhIjoiY2t0M3k3cngzMGNlcDJvbzJiZjByNHpydyJ9.UsxLK_4u6Ei3Ne_0gMUdrw",
                }).addTo(mapDiv);
        }
    },
    mounted() {
        this.setupLeafletMap();
    }
};
</script>

<style scoped>
    #mapContainer {
        margin: 0 Auto;
        width: 700px;
        height: 90vh;
    }
</style>