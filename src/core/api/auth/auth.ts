import {
  IForgotPassword,
  ILogin,
  INewPassword,
  IRegister,
  ILoginGoogle,
} from "src/core/types";
import instanceAxios from "../instance-axios";
import ILoginFacebook from "src/core/types/interfaces/ILoginFacebook";

export const apiLogin = ({ username, password }: ILogin) => {
  return instanceAxios
    .post("/auth/login", {
      username,
      password,
    })
    .then((res) => res.data);
};

export const apiLoginGoogle = ({ tokenId }: ILoginGoogle) => {
  return instanceAxios
    .post("/auth/loginGoogle", {
      tokenId,
    })
    .then((res) => res.data);
};

export const apiLoginFacebook = ({ email, fullName }: ILoginFacebook) => {
  return instanceAxios
    .post("/auth/loginFacebook", {
      email, fullName
    })
    .then((res) => res.data);
};

export const apiForgotPassword = ({ username, host }: IForgotPassword) => {
  return instanceAxios
    .post(`/account/changePassword?username=${username}&host=${host}`)
    .then((res) => res.data);
};

export const apiNewPassword = ({ token, password }: INewPassword) => {
  return instanceAxios
    .post(`/account/reset-password?token=${token}&password=${password}`)
    .then((res) => res.data);
};

export const apiRegister = ({ username, password, email }: IRegister) =>
  instanceAxios
    .post("/account/register", {
      userName: username,
      password,
      email,
    })
    .then((res) => res.data);
