import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../service/apiAuth";

export const useLogin = () => {
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
  });

  return { login, isLoading };
};
