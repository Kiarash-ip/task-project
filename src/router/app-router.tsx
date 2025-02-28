import HomePage from "@/pages/home-page";
import { createBrowserRouter, RouterProvider } from "react-router";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
