import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../../service/apiAuth";

import toast from "react-hot-toast";

export const useUpdateUSer = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserData,

    onSuccess: ({ user }) => {
      console.log(" update ", user);
      toast.success("User data updated successfully");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.setQueriesData(["user", user]);
      console.log(user);
    },

    onError: () => {
      toast.error("There was an error updating the the user, try again");
    },
  });

  return { updateUser, isUpdating };
};
