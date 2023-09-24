import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../service/apiProduct";

export const useProducts = () => {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryFn: getAllProducts,
    queryKey: ["products"],
  });

  return { product, isLoading, error };
};
