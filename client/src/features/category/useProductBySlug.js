import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "../../service/apiProduct";
import { useParams } from "react-router-dom";

export const useGetProductBySlug = () => {
  const { slug } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryFn: getProductBySlug(slug),
    queryKey: ["product", slug],
  });

  return { product, isLoading, error };
};
