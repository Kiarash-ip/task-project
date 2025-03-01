import { Product } from "@/features/types/types";
import { useEffect, useState } from "react";

export default function useProduct(id: string | undefined) {
  const [data, setData] = useState<Product | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    setIsLoading(true);
    fetch(`https://fakestoreapi.in/api/products/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res.product))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  return { data, isLoading };
}
