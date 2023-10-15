import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../service/apiAuth";
import toast from "react-hot-toast";

export const useLogout = () => {
  const quryClient = useQueryClient();

  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Log out successful");

      quryClient.resetQueries({ queryKey: ["user"] });
    },

    onError: () => {
      toast.error("An error occured while logging out! please try again");
    },
  });

  return { logout, isLoggingOut };
};
