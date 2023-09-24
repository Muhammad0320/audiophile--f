import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../service/apiProduct";

export const useProducts = () => {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: getAllProducts,
  });

  return { product, isLoading, error };
};
