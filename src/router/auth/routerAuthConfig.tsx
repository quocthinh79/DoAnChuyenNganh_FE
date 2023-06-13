import { Suspense, lazy } from "react";
import { routerPathFull } from "../../core";
const LoginPage = lazy(() => import("../../pages/auth/login"));
const RouterAuthLayout = lazy(() => import("./routerAuthLayout"));
const ForgotPasswordPage = lazy(
  () => import("../../pages/auth/forgot-password")
);
const ChangePassword = lazy(() => import("../../pages/auth/change-password"));
const NotifiChangePassword = lazy(
  () => import("../../pages/auth/notification-change-password")
);
const RegisterPage = lazy(() => import("../../pages/auth/register"));

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
    {
      path: routerPathFull.auth.forgotPass,
      element: (
        <Suspense fallback={<>Loading</>}>
          <ForgotPasswordPage />
        </Suspense>
      ),
    },
    {
      path: routerPathFull.auth.newPassword,
      element: (
        <Suspense fallback={<>Loading</>}>
          <ChangePassword />
        </Suspense>
      ),
    },
    {
      path: routerPathFull.auth.success,
      element: (
        <Suspense fallback={<>Loading</>}>
          <NotifiChangePassword />
        </Suspense>
      ),
    },
    {
      path: routerPathFull.auth.newPassword,
      element: (
        <Suspense fallback={<>Loading</>}>
          <ChangePassword />
        </Suspense>
      ),
    },
    {
      path: routerPathFull.auth.register,
      element: (
        <Suspense fallback={<>Loading</>}>
          <RegisterPage />
        </Suspense>
      ),
    },
  ],
};

export default routerAuthConfig;
