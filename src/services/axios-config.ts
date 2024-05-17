import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://mintingback-7fd686953800.herokuapp.com/api',
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   },
// });

// export default instance;

const herokuApi = axios.create({
  baseURL: "https://mintingback-7fd686953800.herokuapp.com/api",
  headers: {
    "Authorization": 'Bearer HRKU-783c968b-90b5-4109-a31e-a52e64a850d2',
    'Accept': 'application/vnd.heroku+json; version=3',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

export default herokuApi;
