import MainLayout from "@/layouts/main-layout";
import Blog from "@/pages/blog";
import ContactUs from "@/pages/contact-us";
import Faq from "@/pages/faq";
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
          element: <Blog />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
