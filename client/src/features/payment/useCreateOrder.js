import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createOrderApi } from "../../service/apiOrder";

export function useCreateOrder() {
  const { mutate: createOrder, isLoading } = useMutation({
    mutationFn: createOrderApi,

    onSuccess: () => {
      toast.success("Your order is successfully placed");
    },

    onError: () => {
      toast.error(
        "An error occured while placing your order, please try again"
      );
    },
  });

  return { createOrder, isLoading };
}

export default useCreateOrder;
