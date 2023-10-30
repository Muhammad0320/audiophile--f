import toast from "react-hot-toast";
import { deleteUserApi } from "../../service/apiUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isLoading: isDeleting } = useMutation({
    mutationFn: deleteUserApi,
    mutationKey: ["user"],

    onSuccess: () => {
      toast.success("Your account has been deleted successfylly");

      queryClient.invalidateQueries({ queryKey: ["user"] });

      queryClient.resetQueries({ queryKey: ["user"] });
    },
  });

  return { deleteUser, isDeleting };
};
