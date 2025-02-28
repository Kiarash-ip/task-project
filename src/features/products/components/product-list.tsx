import { useEffect, useState } from "react";
import useProduct from "../hooks/useProduct";

import styles from "./product-list.module.css";
import ProductCard from "./product-card";
import Pagination from "@/components/pagination/pagination";
import Loading from "@/components/loading/loading";

export default function ProductList() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useProduct({ page });

  useEffect(() => {
    console.log(page);
  }, [page]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className={styles.products}>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={page}
          totalCount={100}
          onPageChange={setPage}
          pageSize={10}
          siblingCount={1}
        />
      </div>
    </>
  );
}
