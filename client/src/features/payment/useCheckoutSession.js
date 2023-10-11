import { useQuery } from "@tanstack/react-query";
import { getCheckoutSesionApi } from "../../service/apiOrder";
import toast from "react-hot-toast";

export const useCheckoutSession = () => {
  const { data: checkout, isLoading } = useQuery({
    queryFn: getCheckoutSesionApi,
    queryKey: ["checkout"],

    onError: () => {
      toast.error("Something went very wrong while checking out, Try again!");
    },
  });

  return { checkout, isLoading };
};
