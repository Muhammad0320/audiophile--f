import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateReviewApi } from "../../service/apiReviews";
import toast from "react-hot-toast";

export const useUpdateReview = () => {
  const queryClient = useQueryClient();

  const { mutate: updateReview, isLoading: isUpdating } = useMutation({
    mutationFn: updateReviewApi,

    onSuccess: () => {
      toast.success("Review successfully updated");

      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error(
        "An error occured while trying to update review, please try again"
      );
    },
  });

  return { updateReview, isUpdating };
};
