import { Product } from "@/features/types/types";
import { useEffect, useState } from "react";

interface useProductsProps {
  page: number;
  category: string | null;
}

export default function useProducts({ page, category }: useProductsProps) {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchData(page: number = 1, category: string | null) {
    if (data.length === 0) {
      setIsLoading(true);
    }
    fetch(
      `https://fakestoreapi.in/api/products${
        category ? `/category?type=${category}&` : "?&"
      }limit=9&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.products))
      .finally(() => {
        if (data.length === 0) {
          setIsLoading(false);
        }
      });
  }

  useEffect(() => {
    fetchData(page, category);
  }, [page, category]);

  return { data, isLoading };
}
