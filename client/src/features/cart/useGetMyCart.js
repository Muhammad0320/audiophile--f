import { useQuery } from "@tanstack/react-query";
import { getMyCart } from "../../service/apiCart";

export const useGetMyCart = () => {
  const { data: carts, isLoading } = useQuery({
    queryKey: ["cart"],

    queryFn: getMyCart,
    retry: 3,
  });

  return { carts, isLoading };
};
