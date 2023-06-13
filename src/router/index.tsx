import { routerPathFull } from "@core";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routerAuthConfig from "./auth/routerAuthConfig";
import RouterHomeLayout from "./routerHomeLayout";
import RouterLayout from "./routerLayout";
const SuccessPage = lazy(() => import("../pages/success"));

const HomePage = lazy(() => import("../pages/home"));

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
