import toast from "react-hot-toast";
import { updateUserData } from "../../service/apiUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateUSer = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserData,

    onSuccess: (user) => {
      console.log(user);

      toast.success("User data updated successfully");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.setQueriesData(["user", user]);
    },

    onError: () => {
      toast.error("There was an error updating the the user, try again");
    },
  });

  return { updateUser, isUpdating };
};
