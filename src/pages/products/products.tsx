import Accordion from "@/components/ui/accordion/accordion";

import styles from "./products.module.css";

export default function Products() {
  return (
    <>
      <div className={styles.filtersContainer}>
        <div className={styles.filter}>
          <h3>Filters</h3>
        </div>
        <Accordion>
          <Accordion.AccordionItem title="Category">
            test
          </Accordion.AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
