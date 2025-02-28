import { NavLink } from "react-router";

import SearchIcon from "@/icons/search-icon";
import BagIcon from "@/icons/bag-icon";
import UserIcon from "@/icons/user-icon";

import styles from "./header.module.css";

const NAVIGATION_MENU = [
  {
    id: 0,
    label: "Home",
    href: "/",
  },
  {
    id: 1,
    label: "Products",
    href: "/products",
  },
  {
    id: 2,
    label: "Blog",
    href: "/blog",
  },
  {
    id: 3,
    label: "FAQ",
    href: "/faq",
  },
  {
    id: 4,
    label: "Contact Us",
    href: "/contact-us",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div></div>
      <nav>
        <ul>
          {NAVIGATION_MENU.map((item) => (
            <li key={item.id}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={item.href}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.buttons}>
        <button className={styles.button}>
          <SearchIcon />
        </button>
        <button className={styles.button}>
          <BagIcon />
        </button>
        <button className={styles.button}>
          <UserIcon />
        </button>
      </div>
    </header>
  );
}
