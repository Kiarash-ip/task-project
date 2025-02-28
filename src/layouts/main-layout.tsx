import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Header from "@/components/header/header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="container">
      <Header />
      <Breadcrumb />
      <Outlet />
    </div>
  );
}
