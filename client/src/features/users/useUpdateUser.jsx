import { useMutation } from "@tanstack/react-query";
import { updateUserData } from "../../service/apiAuth";

import toast from "react-hot-toast";

export const useUpdateUSer = () => {
  const { mutate: updateUser, isLoading: isMutating } = useMutation({
    mutationFn: updateUserData,

    onSuccess: () => {
      toast.success("User data updated successfully");
    },

    onError: () => {
      toast.error("There was an error updating the the user, try again");
    },
  });

  return { updateUser, isMutating };
};
