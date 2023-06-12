import instanceAxios from "../instance-axios";

export const apiBrandFilterItems = () => {
  return instanceAxios.get("/laptop/brand").then((res) => res.data);
};

export const apiTypeFilterItems = () => {
  return instanceAxios.get("/laptop/type").then((res) => res.data);
};

export const apiCPUFilterItems = () => {
  return instanceAxios.get("/laptop/chipCpu").then((res) => res.data);
};
