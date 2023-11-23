import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../service/apiAuth";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,

    onSuccess: () => {
      toast.success("Logged in successfully");
      navigate("/");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { login, isLoading };
};
