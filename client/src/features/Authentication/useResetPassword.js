import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { resetPasswordApi } from "../../service/apiAuth";

export const useResetPassword = () => {
  const navigate = useNavigate();

  const { isLoading, mutate: resetPassword } = useMutation({
    mutationFn: resetPasswordApi,

    onSuccess: () => {
      toast.success("Password reset successful");

      navigate("/login");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { isLoading, resetPassword };
};
