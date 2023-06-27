import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerPathFull } from "../core";
import { routerAdminConfig } from "./admin/routerAdminConfig";
import routerAuthConfig from "./auth/routerAuthConfig";
import RouterHomeLayout from "./routerHomeLayout";
import RouterLayout from "./routerLayout";

const HomePage = lazy(() => import("../pages/home"));
const AboutUs = lazy(() => import("../pages/about-us/about-us"));
const Account = lazy(() => import("../pages/account"));
const Cart = lazy(() => import("../pages/cart"));
const DetailPage = lazy(() => import("../pages/detail"));
const PaymentPage = lazy(() => import("../pages/payment"));
const SearchPage = lazy(() => import("../pages/search"));
const SuccessPage = lazy(() => import("../pages/success"));

const router = [
  {
    element: <RouterHomeLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<>Loading</>}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: <RouterLayout />,
    children: [
      {
        path: routerPathFull.success.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <SuccessPage />
          </Suspense>
        ),
      },
      {
        path: routerPathFull.aboutUs.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: routerPathFull.cart.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: routerPathFull.account.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <Account />
          </Suspense>
        ),
      },
      {
        path: routerPathFull.detail.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <DetailPage />
          </Suspense>
        ),
      },
      {
        path: routerPathFull.checkout.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <PaymentPage />
          </Suspense>
        ),
      },
      {
        path: routerPathFull.search.root,
        element: (
          <Suspense fallback={<>Loading</>}>
            <SearchPage />
          </Suspense>
        ),
      },
      routerAdminConfig,
    ],
  },
  {
    ...routerAuthConfig,
  },
];

export function Router() {
  return <RouterProvider router={createBrowserRouter(router)} />;
}

export default Router;
