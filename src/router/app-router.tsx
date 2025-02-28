import MainLayout from "@/layouts/main-layout";
import HomePage from "@/pages/home-page";
import Products from "@/pages/products/products";
import { createBrowserRouter, RouterProvider } from "react-router";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/blog",
          element: <Products />,
        },
        {
          path: "/contact-us",
          element: <Products />,
        },
        {
          path: "/faq",
          element: <Products />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
