import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Header from "@/components/header/header";
import clsx from "clsx";
import { Outlet } from "react-router";

import styles from "./main-layout.module.css";

export default function MainLayout() {
  return (
    <div className="container">
      <Header />
      <div className={clsx("full-width", styles.breadcrumbContainer)}>
        <Breadcrumb />
      </div>
      <Outlet />
    </div>
  );
}
