import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: "https://mintingbackend-887dd6dfeda3.herokuapp.com/api",
  baseURL: "http://localhost:5000/api",
  headers: {
    "Authorization": 'Bearer HRKU-783c968b-90b5-4109-a31e-a52e64a850d2',
    'Accept': 'application/vnd.heroku+json; version=3',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

export default axiosInstance;
