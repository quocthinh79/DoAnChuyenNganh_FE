export const routerPath = {
  auth: {
    root: "auth",
    login: "login",
    forgotPass: "forgot-password",
    register: "register",
    newPassword: "new-password",
    changePassword: "change-password",
    loginSuccess: "login-success",
    success: "success",
    requestNewPassword: "request-new-password",
    logout: "logout",
  },
  home: {
    root: "",
  },
  aboutUs: {
    root: "about-us",
  },
  cart: {
    root: "cart",
  },
  account: {
    root: "account",
  },
  search: {
    root: "search",
  },
  admin: {
    root: "admin",
    laptop: "laptop",
    cart: "cart",
    account: "account",
  },
  detail: {
    root: "detail/:idProduct",
  },
  checkout: {
    root: "checkout",
  },
  success: {
    root: "success",
  },
};

export type TRouterPath = typeof routerPath;

export default routerPath;
