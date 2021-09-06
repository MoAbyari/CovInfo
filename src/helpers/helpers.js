import axios from 'axios';

const baseURL = 'http://localhost:3000'; // trailing slash reuired

// You are not expected to understand this.
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
    })
}