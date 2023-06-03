import { Outlet } from "react-router-dom";
import MainLayout from "../compositions/main-layout";

function RouterLayout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default RouterLayout;
