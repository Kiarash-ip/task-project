import Accordion from "@/components/ui/accordion/accordion";

import { useSearchParams } from "react-router";
import { useCallback } from "react";
import ProductList from "@/features/products/components/product-list";
import useCategories from "@/features/products/hooks/useCategories";

import styles from "./products.module.css";
import { Button } from "@/components/ui/button/button";
import Radio from "@/components/ui/radio/radio";

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
                  <Radio
                    value={cat}
                    label={cat}
                    checked={category === cat}
                    name="category"
                    onChange={(value) => filtersChangeHandler(value)}
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
