import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../service/apiProduct";

//   const location = useLocation();
export const useProductCategory = (category) => {
  console.log(category);
  const { data: categoryProduct, isLoading } = useQuery({
    queryFn: () => getProductsByCategory(category),
    queryKey: ["product-category"],
  });

  return { categoryProduct, isLoading };
};
