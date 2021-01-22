import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://wisprotest-api.herokuapp.com",
});

clienteAxios.interceptors.request.use(function (config) {
  const tokenFromLocalStorage = localStorage.getItem("token");
  const token = tokenFromLocalStorage || null;
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

export default clienteAxios;
