import { useState } from "react";
import useProducts from "../hooks/useProducts";

import styles from "./product-list.module.css";
import ProductCard from "./product-card";
import Pagination from "@/components/pagination/pagination";
import Loading from "@/components/loading/loading";

interface ProductListProps {
  category: string | null;
}

export default function ProductList({ category }: ProductListProps) {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useProducts({ page, category });

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
            id={product.id}
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
