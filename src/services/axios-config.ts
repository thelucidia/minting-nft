import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mintingback-7fd686953800.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;
