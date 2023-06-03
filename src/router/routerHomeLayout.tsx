import { Outlet } from "react-router-dom";
import MainLayout from "../compositions/main-layout";

export function RouterHomeLayout() {
  return (
    <MainLayout carousel sider>
      <Outlet />
    </MainLayout>
  );
}

export default RouterHomeLayout;
