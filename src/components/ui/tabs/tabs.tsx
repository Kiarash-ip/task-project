import { ReactNode } from "react";
import styles from "./Tabs.module.css";
import clsx from "clsx";

interface TabItemProps {
  id: number;
  label: string;
  isActive: boolean;
  onChange(activeTab: number): void;
}

interface TabsProps {
  children: ReactNode;
}

function TabItem({ label, onChange, id, isActive }: TabItemProps) {
  return (
    <li
      className={clsx(styles.tabItem, isActive && styles.active)}
      onClick={() => onChange(id)}
    >
      <span className={styles.tabLink}>{label}</span>
    </li>
  );
}

export default function Tabs({ children }: TabsProps) {
  return (
    <div className={styles.tabsContainer}>
      <ul className={styles.tabsList}>{children}</ul>
    </div>
  );
}

Tabs.TabItem = TabItem;
