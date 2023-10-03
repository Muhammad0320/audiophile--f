import { useMutation } from "@tanstack/react-query";
import { sendBulkItemToCart } from "../../service/apiCart";
import toast from "react-hot-toast";

export const useSendBulkData = () => {
  const { mutate: sendBulkdata, isLoading: isSendingBulkData } = useMutation({
    mutationFn: sendBulkItemToCart,

    onSuccess: () => {
      toast.success("Cart saved succeffully");
    },

    onError: () => {
      toast.error("Something went very wrong while saving the cart ");
    },
  });

  return { sendBulkdata, isSendingBulkData };
};
