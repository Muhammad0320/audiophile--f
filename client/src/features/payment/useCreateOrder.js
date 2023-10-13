import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createOrderApi } from "../../service/apiOrder";
import { useNavigate } from "react-router-dom";

export function useCreateOrder() {
  const navigate = useNavigate();

  const { mutate: createOrder, isLoading } = useMutation({
    mutationFn: createOrderApi,

    onSuccess: () => {
      toast.success("Your order is successfully placed");
      navigate("/");
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
