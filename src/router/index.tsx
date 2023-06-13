import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routerAuthConfig from "./auth/routerAuthConfig";
import RouterHomeLayout from "./routerHomeLayout";

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
    ...routerAuthConfig,
  },
];

export function Router() {
  return <RouterProvider router={createBrowserRouter(router)} />;
}

export default Router;
