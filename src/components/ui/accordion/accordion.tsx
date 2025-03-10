import { ReactNode, useState } from "react";

import ArrowDown from "@/icons/chevron";

import styles from "./accordion.module.css";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <ArrowDown />
        <span>{title}</span>
      </button>
      <div className={`${styles.accordionBody} ${isOpen ? styles.open : ""}`}>
        {children}
      </div>
    </div>
  );
};

interface AccordionProps {
  children: ReactNode;
}

const Accordion = ({ children }: AccordionProps) => {
  return <div className={styles.accordion}>{children}</div>;
};

Accordion.AccordionItem = AccordionItem;

export default Accordion;
