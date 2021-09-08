<template>
 <div id="container">
     <h2>Map of NSW COVID-19 case locations</h2>
   <div id="mapContainer"></div>
 </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { api } from '../helpers/helpers';
import L from "leaflet";
import _ from 'lodash';


export default {
    name: "Map",
    data() {
        return{
            NSWGeoJson: [],
            dailyCasesInState: [],
            center: [-33.8555, 151.1155],
        }
    },
    methods: {
        getColor(d) {
                return  d > 1000 ? '#3D2807' :
                        d > 500  ? '#bd0026' :
                        d > 100  ? '#fb6a4a' :
                        d > 50   ? '#fe9929' :
                        d > 9   ?   'yellow' :
                                    '#f0f0f0';
        },
        styleMap(feature){
            if (feature?.properties.LGA_CODE19) {
                const lgaCode = feature.properties.LGA_CODE19;
                const numberOfCasesByLga = _.find(this.dailyCasesInState, {lga_code: lgaCode});
            
                const totalCases = numberOfCasesByLga?.total_cases || 0;
                const color = this.getColor(totalCases);
                return { 
                    color: "black",
                    fillColor: color,
                    weight: 1,
                    // opacity: 0.5,
                    fillOpacity: 1
                };
            } else {
                return { color: "white" };
            }
        },
        onEachFeature(feature, layer) {
            if (feature?.properties.LGA_CODE19) {
                 const numberOfCasesByLga = _.find(this.dailyCasesInState, {lga_code: feature.properties.LGA_CODE19});

                if (numberOfCasesByLga) {
                    layer.bindPopup(`${feature.properties.LGA_NAME19.bold()}, Total cases: ${numberOfCasesByLga.total_cases}`);
                    layer.on('mouseover', () => { layer.openPopup(); });
                    layer.on('mouseout', () => { layer.closePopup(); });
                }
            }
        },
        setupLeafletMap: function () {
            const mapDiv = L.map("mapContainer").setView(this.center, 8);
            L.tileLayer(
                "https://api.mapbox.com/styles/v1/moabyari/ckt9sc7n2689r18pgaswrn4nl/tiles/{z}/{x}/{y}?access_token={accessToken}",
                {
                    attribution:
                    'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 16,
                    minZoom: 7,
                    id: "mapbox/streets-v11",
                    accessToken: "pk.eyJ1IjoibW9hYnlhcmkiLCJhIjoiY2t0M3k3cngzMGNlcDJvbzJiZjByNHpydyJ9.UsxLK_4u6Ei3Ne_0gMUdrw",
                }).addTo(mapDiv);

            L.geoJson(this.NSWGeoJson, {onEachFeature: this.onEachFeature, style: this.styleMap}).addTo(mapDiv);
        },
    },
    async mounted() {
        this.NSWGeoJson = await api.getNSWGeoJson();
        this.dailyCasesInState = _.uniqBy(await api.getCasesInState(), 'lga_code');
        this.setupLeafletMap();
        this.styleMap();
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