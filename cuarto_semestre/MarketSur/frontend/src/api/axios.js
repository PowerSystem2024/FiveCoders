import axios from 'axios';

const cliente = axios.create({
    baseURL: 'http://localhost:3001/api',
    withCredentials: true,
});

export default cliente;