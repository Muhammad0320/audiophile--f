import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../service/apiAuth";
import toast from "react-hot-toast";

export const useLogin = () => {
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,

    onSuccess: () => {
      toast.success("Logged in successfully");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { login, isLoading };
};
