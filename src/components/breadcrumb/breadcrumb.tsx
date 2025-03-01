import { Link, useLocation } from "react-router";

import styles from "./breadcrumb.module.css";
import clsx from "clsx";

interface BreadcrumbProps {
  title: string | null;
}

export default function Breadcrumb({ title }: BreadcrumbProps) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  if (title) {
    pathnames[pathnames.length - 1] = title;
  }

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
