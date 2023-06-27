import { Suspense, lazy } from "react";
import { routerPathFull } from "../../core";
import Logout from "../../pages/auth/logout";

const ForgotPasswordPage = lazy(
  () => import("../../pages/auth/forgot-password")
);

// const LogoutPage = lazy(() => import("../../pages/auth/logout"));
const LoginPage = lazy(() => import("../../pages/auth/login"));
const RegisterPage = lazy(() => import("../../pages/auth/register"));
const RouterAuthLayout = lazy(() => import("./routerAuthLayout"));
const OTP = lazy(() => import("../../pages/auth/notification-change-password"));
const ChangePassword = lazy(() => import("../../pages/auth/change-password"));

export const routerAuthConfig: object = {
  path: routerPathFull.auth.root,
  element: (
    <Suspense fallback={<>Loading</>}>
      <RouterAuthLayout />
    </Suspense>
  ),
  children: [
    {
      path: routerPathFull.auth.logout,
      element: <Logout />,
    },
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
      path: routerPathFull.auth.register,
      element: (
        <Suspense fallback={<>Loading</>}>
          <RegisterPage />
        </Suspense>
      ),
    },
    {
      path: routerPathFull.auth.success,
      element: (
        <Suspense fallback={<>Loading</>}>
          <OTP />
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
  ],
};

export default routerAuthConfig;
