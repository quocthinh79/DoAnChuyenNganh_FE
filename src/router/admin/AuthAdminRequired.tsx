import { Button, ContainerFixed, Flex } from "@components";
import { EJustifyFlex, ERouterAdmin, routerPathFull } from "@core";
import { useStorageRoles } from "@store";
import { Segmented } from "antd";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

function AuthAdminRequired() {
  const { isAdmin } = useStorageRoles();
  const location = useLocation();
  const navigate = useNavigate();

  if (!isAdmin()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  const handleChange = (value: any) => {
    switch (value) {
      case ERouterAdmin.Account:
        navigate(routerPathFull.admin.account);
        break;
      default:
        navigate(routerPathFull.admin.laptop);
        break;
    }
  };

  return (
    <>
      <ContainerFixed position="center">
        <Flex justify={EJustifyFlex.Center}>
          <Segmented
            onChange={handleChange}
            options={[ERouterAdmin.Laptop, ERouterAdmin.Account]}
            value={
              location.pathname === routerPathFull.admin.laptop
                ? ERouterAdmin.Laptop
                : ERouterAdmin.Account
            }
            defaultValue={"Laptop"}
          />
        </Flex>
      </ContainerFixed>
      <Outlet />
    </>
  );
}

export default AuthAdminRequired;
