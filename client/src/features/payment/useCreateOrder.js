import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateOrder() {
  const { mutate: createOrder } = useMutation({
    mutationFn: useCreateOrder,

    onSuccess: () => {
      toast.success("Your order is successfully placed");
    },

    onError: () => {
      toast.error(
        "An error occured while placing your order, please try again"
      );
    },
  });

  return { createOrder };
}

export default useCreateOrder;
