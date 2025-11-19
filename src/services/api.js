import axios from "axios";

const api = axios.create({
  baseURL: "https://senseway-api-v2-production.up.railway.app",
});

export default api;
//teste