import toast from "react-hot-toast";
import { deleteCartOnCheckout } from "../../service/apiCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCartOnCheckout = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteCart, isLoading } = useMutation({
    mutationFn: deleteCartOnCheckout,

    onSuccess: () => {
      toast.success("Order successfully placed");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },

    onError: () => {
      toast.error("An Error occurred while placing your order");
    },
  });

  return { deleteCart, isLoading };
};
