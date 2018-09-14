let axios = require('axios');

let axiosClient = axios.create({
  baseURL: '/api/'
});

export default axiosClient;
