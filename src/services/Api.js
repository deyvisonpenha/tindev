import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-api-tindev.herokuapp.com'
});

export default api;