import { useEffect, useState } from "react";

export default function useCategories() {
  const [data, setData] = useState<string[] | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    setIsLoading(true);
    fetch("https://fakestoreapi.in/api/products/category")
      .then((res) => res.json())
      .then((res) => setData(res.categories))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading };
}
