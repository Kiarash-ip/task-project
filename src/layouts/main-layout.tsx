import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Header from "@/components/header/header";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";

export default function MainLayout() {
  const [title, setTitle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setTitle(null);
  }, [location.pathname]);

  return (
    <div className="container">
      <Header />
      <Breadcrumb title={title} />
      <Outlet context={setTitle} />
    </div>
  );
}
