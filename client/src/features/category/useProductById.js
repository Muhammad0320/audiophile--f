import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../service/apiProduct";
import { useParams } from "react-router-dom";

export const useGetProductById = () => {
  const { productID } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryFn: getProductById(productID),
    queryKey: ["product", productID],
  });

  return { product, isLoading, error };
};
