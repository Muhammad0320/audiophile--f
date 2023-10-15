import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../../service/apiAuth";

export const useLogout = () => {
  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    mutationKey: ["user"],
  });

  return { logout, isLoggingOut };
};
