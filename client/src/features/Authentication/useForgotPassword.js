import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { forgotPasswordApi } from "../../service/apiAuth";

export const useForgotPassword = () => {
  const { isLoading, mutate: forgotPassword } = useMutation({
    mutationFn: forgotPasswordApi,

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { isLoading, forgotPassword };
};
