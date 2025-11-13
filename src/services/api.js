import axios from "axios";

const api = axios.create({
  baseURL: "http://centerbeam.proxy.rlwy.net:38562",
});

export default api;
