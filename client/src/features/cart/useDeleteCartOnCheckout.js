import { useMutation } from "@tanstack/react-query";
import { deleteCartOnCheckout } from "../../service/apiCart";
import toast from "react-hot-toast";

export const useDeleteCartOnCheckout = () => {
  const { mutate: deleteCart, isLoading } = useMutation({
    mutationFn: deleteCartOnCheckout,
    mutationKey: ["cart"],
    onSuccess: () => {
      toast.success("Order successfully placed");
    },

    onError: () => {
      toast.error("An Error occurred while placing your order");
    },
  });

  return { deleteCart, isLoading };
};
