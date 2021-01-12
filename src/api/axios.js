import axios from "axios";

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_HEROKU_API_URL || "http://localhost:4000",
  // baseURL: "https://wisprotest.herokuapp.com",
});

clienteAxios.interceptors.request.use(function (config) {
  const tokenFromLocalStorage = localStorage.getItem("token");
  const token = tokenFromLocalStorage || null;
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

export default clienteAxios;
