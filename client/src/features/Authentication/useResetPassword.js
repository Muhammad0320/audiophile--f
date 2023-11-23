import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { resetPasswordApi } from "../../service/apiAuth";

export const useResetPassword = () => {
  const { isLoading, mutate: resetPassword } = useMutation({
    mutationFn: resetPasswordApi,

    onSuccess: () => {
      toast.success("Password reset successful");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { isLoading, resetPassword };
};
