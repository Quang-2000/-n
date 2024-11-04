import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://localhost:5000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

axiosClient.interceptors.request.use(function (config) {
    
    return config;
  }, function (error) {
   
    return Promise.reject(error);
  });


axiosClient.interceptors.response.use(function (response) {
   
    return response.data;
  }, function (error) {
    
    return Promise.reject(error);
  });