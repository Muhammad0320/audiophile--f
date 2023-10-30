import toast from "react-hot-toast";
import { updateUserPassword } from "../../service/apiUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();

  const { mutate: updatePassword, isLoading: isUpdatingPassowrd } = useMutation(
    {
      mutationFn: updateUserPassword,

      onSuccess: (user) => {
        toast.success("Password updated successfully");

        queryClient.invalidateQueries({ queryKey: ["user"] });
        queryClient.setQueriesData(["user", user]);
      },

      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return { updatePassword, isUpdatingPassowrd };
};
