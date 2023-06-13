import { Suspense, lazy } from "react";
import { routerPathFull } from "../../core";
// const LogoutPage = lazy(() => import("../../pages/auth/logout"));
const LoginPage = lazy(() => import("../../pages/auth/login"));
const RouterAuthLayout = lazy(() => import("./routerAuthLayout"));

export const routerAuthConfig: object = {
  path: routerPathFull.auth.root,
  element: (
    <Suspense fallback={<>Loading</>}>
      <RouterAuthLayout />
    </Suspense>
  ),
  children: [
    {
      path: routerPathFull.auth.login,
      element: (
        <Suspense fallback={<>Loading</>}>
          <LoginPage />
        </Suspense>
      ),
    },
  ],
};

export default routerAuthConfig;
