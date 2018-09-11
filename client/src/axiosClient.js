let axios = require('axios');

let axiosClient = axios.create({
  baseURL: 'http://localhost:3001'
});

export default axiosClient;
