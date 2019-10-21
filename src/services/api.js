import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rocketseat-node.herokuapp.com/api'  // URL da API
});

export default api;