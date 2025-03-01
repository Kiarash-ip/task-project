import Accordion from "@/components/ui/accordion/accordion";

import Checkbox from "@/components/ui/checkbox/checkbox";
import { useSearchParams } from "react-router";
import { useCallback } from "react";
import ProductList from "@/features/products/components/product-list";
import useCategories from "@/features/products/hooks/useCategories";

import styles from "./products.module.css";
import { Button } from "@/components/ui/button/button";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { data } = useCategories();

  const clearFiltersHandler = useCallback(() => {
    setSearchParams((prev) => {
      prev.delete("category");
      return prev;
    });
  }, [setSearchParams]);

  const filtersChangeHandler = useCallback(
    (value: string) => {
      setSearchParams((prev) => {
        prev.set("category", value);
        return prev;
      });
    },
    [setSearchParams]
  );

  return (
    <>
      <title>Products</title>
      <div className={styles.filtersContainer}>
        <div className={styles.filter}>
          <h3>Filters</h3>
          {category && (
            <Button
              variant="primary"
              onClick={clearFiltersHandler}
              size="medium"
            >
              Clear all
            </Button>
          )}
        </div>
        <Accordion>
          <Accordion.AccordionItem title="Category">
            <ul className={styles.filterList}>
              {data?.map((cat) => (
                <li key={cat}>
                  <Checkbox
                    label={cat}
                    checked={category === cat}
                    onChange={() => filtersChangeHandler(cat)}
                  />
                </li>
              ))}
            </ul>
          </Accordion.AccordionItem>
        </Accordion>
      </div>
      <div className={styles.productsContainer}>
        <ProductList category={category} />
      </div>
    </>
  );
}
