import { routerPathFull } from "../../core";
import AccountAdminPage from "../../pages/admin/account";
import LaptopAdminPage from "../../pages/admin/laptop";
import AuthAdminRequired from "./AuthAdminRequired";

export const routerAdminConfig: object = {
  path: routerPathFull.admin.root,
  element: <AuthAdminRequired />,
  children: [
    {
      path: routerPathFull.admin.laptop,
      element: <LaptopAdminPage />,
    },
    {
      path: routerPathFull.admin.account,
      element: <AccountAdminPage />,
    },
  ],
};
