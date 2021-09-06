import axios from 'axios';

const baseURL = 'http://localhost:3000'; // trailing slash reuired

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
        const res = await axios.get(baseURL2);
        return res.data;
    })
}

