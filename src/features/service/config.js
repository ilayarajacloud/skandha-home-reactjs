// import axios from 'axios';
// console.log(process.env.REACT_APP_BASE_URL);
// export const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
//   // timeout : 3000,
//   headers: { "Content-Type": "application/json", accept: "text/plain" }
// })

import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL : process.env.REACT_APP_BASE_URL,
  headers : {"Content-Type":"application/json", accept: "text/plain"}
})