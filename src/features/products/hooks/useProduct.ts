import { Product } from "@/features/types/types";
import { useEffect, useState } from "react";

interface useProductProps {
  page: number;
}

export default function useProduct({ page }: useProductProps) {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchData(page = 1) {
    if (data.length === 0) {
      setIsLoading(true);
    }
    fetch(`https://fakestoreapi.in/api/products?limit=9&page=${page}`)
      .then((res) => res.json())
      .then((res) => setData(res.products))
      .finally(() => {
        if (data.length === 0) {
          setIsLoading(false);
        }
      });
  }

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return { data, isLoading };
}
