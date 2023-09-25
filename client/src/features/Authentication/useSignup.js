import { useMutation } from "@tanstack/react-query";
import { signupApi } from "../../service/apiAuth";
import toast from "react-hot-toast";

export const useSignup = () => {
  const {
    mutate: signup,
    isLoading,
    error,
  } = useMutation({
    mutationFn: signupApi,

    onSuccess: () => {
      toast.success("New user created successfully, check your email");
    },

    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  // console.log(signup);

  return { signup, isLoading, error };
};
