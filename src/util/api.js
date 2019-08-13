import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tindev-api01.herokuapp.com'
})

export default api;