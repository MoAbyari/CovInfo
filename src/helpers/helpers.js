import axios from 'axios';

const baseURL = 'http://localhost:3000/info/'; 
const baseURL2 = 'http://localhost:3000/info/vaccine/';

const handleError = (fn) => (...params) =>
    fn(...params).catch((error) => {
        console.error(error);
    });

export const api = {
    getInfo: handleError(async () => {
        const res = await axios.get(baseURL);
        return res.data;
    }),

    getVaccineInfo: handleError(async () => {
        const res = await axios.get(baseURL2);
        return res.data;
    })
}

