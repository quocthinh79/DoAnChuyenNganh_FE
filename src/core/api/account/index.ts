import { IGetOnlyAccountReq, IUpdateAccountReq } from "@core";
import instanceAxios from "../instance-axios";
import { IDeleteAccountReq } from "src/core/types/interfaces/request/IDeleteAccountReq";

export const apiGetOnlyAccount = () => {
  return instanceAxios.get("/account/detail").then((res) => res.data);
};

export const apiUpdateAccount = ({
  address,
  addressDetail,
  email,
  fullName,
  id,
  password,
  phone,
  sex,
  userName,
  dob,
}: IUpdateAccountReq) => {
  const accountDTO = {
    address,
    addressDetail,
    email,
    fullName,
    id,
    password,
    phone,
    sex,
    userName,
    dob,
  };

  return instanceAxios
    .put("/account/update", { ...accountDTO })
    .then((res) => res.data);
};

export const apiGetMultipleAccounts = () => {
  return instanceAxios.get("/account/list").then((res) => res.data);
};

export const apiDeleteAccount = ({ id }: IDeleteAccountReq) => {
  return instanceAxios.delete(`/account/delete/${id}`, {
    data: {
      id,
    },
  });
};

export const apiUpdateAccountInAdmin = ({
  address,
  addressDetail,
  email,
  fullName,
  id,
  password,
  phone,
  sex,
  token,
  userName,
  dob,
}: IUpdateAccountReq) => {
  const accountDTO = {
    address,
    addressDetail,
    email,
    fullName,
    id,
    password,
    phone,
    sex,
    userName,
    dob,
  };

  return instanceAxios
    .put("/account/admin/update", { ...accountDTO })
    .then((res) => res.data);
};
