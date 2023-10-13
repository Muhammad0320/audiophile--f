import { useQuery } from "@tanstack/react-query";
import { getMyOrderApi } from "../../service/apiOrder";

export const useGetCurrentUserOrder = () => {
  const { data: myOrder, isLoading } = useQuery({
    queryFn: getMyOrderApi,

    queryKey: ["order"],
  });

  return { myOrder, isLoading };
};
