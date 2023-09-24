import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../service/apiProduct";

export const useProductCategory = () => {
  const { data: categoryProduct, isLoading } = useQuery({
    queryFn: (category) => getProductsByCategory(category),
    queryKey: ["product-category"],
  });

  return { categoryProduct, isLoading };
};
