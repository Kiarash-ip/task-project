import { Link, useLocation } from "react-router";

import styles from "./breadcrumb.module.css";
import clsx from "clsx";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className={clsx("full-width", styles.container)}>
      <ul className={styles.breadcrumb}>
        <li className={styles.breadcrumbItem}>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to} className={styles.breadcrumbItem}>
              <Link to={to}>{value.replace("-", " ")}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
