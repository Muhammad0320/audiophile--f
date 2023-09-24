import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../../service/apiProduct";

export const useGetProductBySlug = () => {
  const { slug } = useParams();

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["product-slug"],

    queryFn: () => getProductBySlug(slug),
  });

  return { product, error, isLoading };
};
