import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { routerPathFull } from "../../core";
import { Button } from "@components";

export interface useLoggedProps {
  token?: string;
}

export function useLogged({ token }: useLoggedProps) {
  return token
    ? {
        key: routerPathFull.auth.logout,
        label: <LogoutOutlined style={{ fontSize: "28px" }} />,
      }
    : {
        key: routerPathFull.auth.login,
        label: (
          <Link to={routerPathFull.auth.login}>
            <LoginOutlined style={{ fontSize: "28px" }} />
          </Link>
        ),
      };
}

export default useLogged;
