import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../../service/apiProduct";

export const useGetProductBySlug = () => {
  const { slug } = useParams();

  console.log(slug);

  const queryClient = useQueryClient();

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["product-slug", slug],

    queryFn: () => getProductBySlug(slug),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product-slug"] });
    },
  });

  return { product, error, isLoading };
};
