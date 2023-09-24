import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../service/apiProduct";

export const useProductCategory = (category) => {
  const { data: categoryProduct, isLoading } = useQuery({
    queryFn: () => getProductsByCategory(category),
    queryKey: ["product-category"],
  });

  return { categoryProduct, isLoading };
};
