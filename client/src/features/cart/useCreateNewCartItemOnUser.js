import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewCartItemOnUser } from "../../service/apiCart";
import toast from "react-hot-toast";

export const useCreateNewCartItemOnUser = () => {
  const queryClient = useQueryClient();

  const { mutate: createNewItem, isLoading: isCreatingItem } = useMutation({
    mutationFn: createNewCartItemOnUser,

    onSuccess: () => {
      toast.success("Item persisted to cart successfully");

      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error("An error occured while updating the cart ");
    },
  });

  return { createNewItem, isCreatingItem };
};
