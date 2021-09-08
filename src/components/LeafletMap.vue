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
            dailyCasesInState: [],
            center: [-32.5098, 147.4805],
        }
    },
    methods: {
        styleMap(features){
            const lgaCode = features.properties.LGA_CODE19;
            // console.log(">>>>>>>>>>postecode", postCode);
            const color = lgaCode === "10500" ? "red" : "blue";
            return { color: color };
        },
        onEachFeature(feature, layer) {
            if (feature.properties && feature.properties.LGA_NAME19) {
                layer.bindPopup(feature.properties.LGA_NAME19);
                layer.on('mouseover', () => { layer.openPopup(); });
                layer.on('mouseout', () => { layer.closePopup(); });
            }
        },
        setupLeafletMap: function () {
            const mapDiv = L.map("mapContainer").setView(this.center, 7);
            L.tileLayer(
                "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
                {
                    attribution:
                    'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 16,
                    id: "mapbox/streets-v11",
                    accessToken: "pk.eyJ1IjoibW9hYnlhcmkiLCJhIjoiY2t0M3k3cngzMGNlcDJvbzJiZjByNHpydyJ9.UsxLK_4u6Ei3Ne_0gMUdrw",
                }).addTo(mapDiv);

            L.geoJson(this.NSWGeoJson, {onEachFeature: this.onEachFeature, style: this.styleMap}).addTo(mapDiv);
        },
    },
    async mounted() {
        this.NSWGeoJson = await api.getNSWGeoJson();
        this.dailyCasesInState = await api.getCasesInState();
        this.setupLeafletMap();
    }
};
</script>

<style scoped>
    #mapContainer {
        width: 700px;
        height: 90vh;
        margin: 0 auto;
    }
</style>