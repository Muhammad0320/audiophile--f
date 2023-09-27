import { useMutation } from "@tanstack/react-query";
import { updateCurrentUserPassword } from "../../../../server/controllers/authController";
import toast from "react-hot-toast";

export const useUpdatePassword = () => {
  const { mutate: updatePassword, isLoading: isUpdatingPassowrd } = useMutation(
    {
      mutationFn: updateCurrentUserPassword,

      onSuccess: () => {
        toast.success("Password updated successfully");
      },

      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return { updatePassword, isUpdatingPassowrd };
};
