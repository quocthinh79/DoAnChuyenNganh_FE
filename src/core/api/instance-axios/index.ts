import { API_SPRING_BOOT } from "@constant";
import axios from "axios";

const instanceAxios = axios.create({
  baseURL: API_SPRING_BOOT,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
  },
});

export default instanceAxios;
