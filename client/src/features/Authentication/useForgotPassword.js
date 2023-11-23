import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { forgotPasswordApi } from "../../service/apiAuth";

export const useForgotPassword = () => {
  const navigate = useNavigate();

  const { isLoading, mutate: forgotPassword } = useMutation({
    mutationFn: forgotPasswordApi,

    onSuccess: () => {
      navigate("/success-email");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { isLoading, forgotPassword };
};
