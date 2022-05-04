import axios from 'axios';

const url = process.env.API_URL;

const api = axios.create({
  baseURL: url,
  responseType: 'json',
});

export default api;
