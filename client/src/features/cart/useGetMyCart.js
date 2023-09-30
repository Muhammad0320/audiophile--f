import { useQuery } from "@tanstack/react-query";
import { getMyCart } from "../../service/apiCart";

export const useGetMyCart = () => {
  const { data: carts, isLoading } = useQuery({
    queryFn: getMyCart,

    queryKey: ["cart"],
  });

  console.log(carts);

  return { carts, isLoading };
};

export const useGetCart = () => {
  const { data: carts } = useQuery({
    queryFn: getMyCart,

    queryKey: ["cart"],
  });

  console.log(carts);

  return carts;
};
