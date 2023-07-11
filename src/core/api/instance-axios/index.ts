import { API_SPRING_BOOT } from "@constant";
import axios from "axios";

// let token = "";

// window.addEventListener("storage", () => {
// const data = window.localStorage.getItem("token");
// const token = data !== "" ? JSON.parse(data || "").state.token : "";
// console.log(token);
// });

export const instanceAxios = axios.create({
  baseURL: API_SPRING_BOOT,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
  },
});

instanceAxios.interceptors.request.use(function (config) {
  const data = window.localStorage.getItem("token");
  const token = data !== "" ? JSON.parse(data || "").state.token : "";
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instanceAxios;
