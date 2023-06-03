import { IPagination } from "src/core/types/interfaces/IPagination";
import instanceAxios from "../instance-axios";

export const apiGetMultipleLaptop = ({
  start = 1,
  limit = 10,
  brands,
  chipCpus,
  types,
}: IPagination) => {
  return instanceAxios
    .get(`/laptop`, {
      params: {
        start,
        limit,
        brands,
        chipCpus,
        types,
      },
    })
    .then((res) => res.data);
};
