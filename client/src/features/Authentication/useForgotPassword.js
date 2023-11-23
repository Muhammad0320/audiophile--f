import { useMutation } from "@tanstack/react-query";
import { forgotPasswordApi } from "../../service/apiAuth";

export const useForgotPassword = () => {
  const { isLoading, mutate: forgotPassword } = useMutation({
    mutationFn: forgotPasswordApi,
  });

  return { isLoading, forgotPassword };
};
