import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../service/apiProduct";

export const useProducts = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryFn: getAllProducts,
    queryKey: ["products"],
  });

  return { products, isLoading, error };
};
