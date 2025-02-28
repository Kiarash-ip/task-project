import Accordion from "@/components/ui/accordion/accordion";

import styles from "./products.module.css";
import Checkbox from "@/components/ui/checkbox/checkbox";
import { useSearchParams } from "react-router";
import { useCallback } from "react";
import ProductList from "@/features/products/components/product-list";

const FILTERS = [
  {
    id: 0,
    label: "TV",
    value: "tv",
  },
  {
    id: 1,
    label: "Laptop",
    value: "laptop",
  },
  {
    id: 2,
    label: "Audio",
    value: "audio",
  },
  {
    id: 3,
    label: "Mobile",
    value: "mobile",
  },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const values = searchParams.getAll("model") || [];

  const filtersChangeHandler = useCallback(
    (key: string, value: string) => {
      setSearchParams((prev) => {
        let current_queries = prev.getAll(key) || [];
        if (current_queries.includes(value)) {
          prev.delete(key);
          let newQueries = current_queries.filter((query) => query !== value);
          newQueries.forEach((query) => {
            if (query) {
              prev.append(key, query);
            }
          });
        } else {
          prev.append(key, value);
        }
        return prev;
      });
    },
    [setSearchParams]
  );

  return (
    <>
      <div className={styles.filtersContainer}>
        <div className={styles.filter}>
          <h3>Filters</h3>
        </div>
        <Accordion>
          <Accordion.AccordionItem title="Category">
            <ul className={styles.filterList}>
              {FILTERS.map((filter) => (
                <li key={filter.id}>
                  <Checkbox
                    label={filter.label}
                    checked={values.includes(String(filter.value))}
                    onChange={() => filtersChangeHandler("model", filter.value)}
                  />
                </li>
              ))}
            </ul>
          </Accordion.AccordionItem>
        </Accordion>
      </div>
      <div className={styles.productsContainer}>
        <ProductList />
      </div>
    </>
  );
}
