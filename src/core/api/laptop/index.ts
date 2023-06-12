import {
  IDeleteLaptopReq,
  IProduct,
  ISearchLaptopWithName,
  IUpdateAccountReq,
  IUpdateLaptopReq,
} from "@core";
import instanceAxios from "../instance-axios";
import { IPagination } from "src/core/types/interfaces/IPagination";

export const apiGetLaptopByID = (id: number) => {
  return instanceAxios.get(`/laptop/${id}`).then((res) => res.data);
};

export const apiGetImagesLaptop = (id: number) => {
  return instanceAxios.get(`/laptop/images/${id}`).then((res) => res.data);
};

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

export const apiAddLaptop = ({
  battery,
  brand,
  chipCpu,
  color,
  cpu,
  display,
  graphics,
  laptopState,
  price,
  productName,
  quantity,
  ram,
  storage,
  type,
  weight,
  avatarFile,
  imageFiles,
}: IProduct) => {
  const passProps = {
    battery,
    brand,
    chipCpu,
    color,
    cpu,
    display,
    graphics,
    laptopState,
    price,
    productName,
    quantity,
    ram,
    storage,
    type,
    weight,
    id: 1,
    facilityId: 1,
  };

  const formData = new FormData();

  formData.append(
    "laptopDTO",
    JSON.stringify({
      ...passProps,
    })
  );

  formData.append("avatarFile", avatarFile[0]);

  imageFiles.forEach((file: any) => {
    formData.append("imageFiles", file);
  });

  return instanceAxios
    .post("/laptop", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};

export const apiUpdateLaptop = ({
  id,
  avatarFile,
  battery,
  brand,
  chipCpu,
  color,
  cpu,
  display,
  graphics,
  imageFiles,
  laptopState,
  // linkAvatar,
  price,
  productName,
  quantity,
  ram,
  storage,
  type,
  weight,
}: IUpdateLaptopReq) => {
  const passProps = {
    battery,
    brand,
    chipCpu,
    color,
    cpu,
    display,
    graphics,
    laptopState,
    price,
    productName,
    quantity,
    ram,
    storage,
    type,
    weight,
    facilityId: 1,
    // linkAvatar,
  };

  const formData = new FormData();

  formData.append(
    "laptopDTO",
    JSON.stringify({
      ...passProps,
    })
  );

  return instanceAxios
    .put(`/laptop/update/${id}`, { ...passProps })
    .then((res) => res.data);
};

export const apiDeleteLaptop = ({ ids }: IDeleteLaptopReq) => {
  return instanceAxios.delete(`/laptop`, { data: ids }).then((res) => res.data);
};

export const apiSearchLaptopWithName = ({
  productName,
}: ISearchLaptopWithName) => {
  return instanceAxios
    .get("/laptop/product_name", { params: { productName } })
    .then((res) => res.data);
};
