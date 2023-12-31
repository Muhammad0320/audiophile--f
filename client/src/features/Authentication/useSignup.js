import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../../service/apiAuth";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  const navigate = useNavigate();

  const {
    mutate: signup,
    isLoading,
    error,
  } = useMutation({
    mutationFn: signupApi,

    onSuccess: () => {
      toast.success("New user created successfully");
      navigate("/");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { signup, isLoading, error };
};
