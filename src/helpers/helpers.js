import axios from 'axios';

const baseURL = 'http://localhost:3000'; 

const handleError = (fn) => (...params) =>
    fn(...params).catch((error) => {
        console.error(error);
    });

export const api = {
    getInfo: handleError(async () => {
        const res = await axios.get(baseURL + '/info');
        return res.data;
    }),
    getCasesByAge: handleError(async () => {
        const res = await axios.get(baseURL + '/cases-by-age');
        return res.data;
    }),

    getVaccineInfo: handleError(async () => {
        const res = await axios.get(baseURL + '/vaccine');
        return res.data;
    }),

    getCasesInState: handleError(async () => {
        const res = await axios.get(baseURL + '/lga-daily-cases');
        return res.data;
    }),

    getNSWGeoJson: handleError(async () => {
        const res = await axios.get('https://raw.githubusercontent.com/tonywr71/GeoJson-Data/master/suburb-2-nsw.geojson');
        return res.data;
    }),
}


