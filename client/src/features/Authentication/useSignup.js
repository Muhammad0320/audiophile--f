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

    onError: () => {
      toast.error("An error occured while creating new user, try again");
    },
  });

  console.log(signup);

  return { signup, isLoading, error };
};
