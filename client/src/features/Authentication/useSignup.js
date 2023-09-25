import { useMutation } from "@tanstack/react-query";
import { signupApi } from "../../service/apiAuth";

export const useSignup = () => {
  const {
    mutate: signup,
    isLoading,
    error,
  } = useMutation({
    mutationFn: signupApi,
  });

  // console.log(signup);

  return { signup, isLoading, error };
};
