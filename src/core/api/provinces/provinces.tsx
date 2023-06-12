import { PROVINCES_API_LINK } from "@constant";
import axios from "axios";

export const apiProvinces = () =>
  axios.get(PROVINCES_API_LINK).then((res) => res.data);
