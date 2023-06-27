import { routerPathFull } from "@core";
import { useStorageRoles, useStorageToken } from "@store";
import { useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export interface LogoutProps {}

export function Logout(props: LogoutProps) {
  const { setToken } = useStorageToken();
  const { setRoles } = useStorageRoles();
  const navigate = useNavigate();
  //   navigate(routerPathFull.home.root);

  const test = useCallback(() => navigate(routerPathFull.home.root), []);

  useEffect(() => {
    setToken("");
    setRoles([]);
    test();
  }, []);

  return <>This is logout</>;
}

export default Logout;
