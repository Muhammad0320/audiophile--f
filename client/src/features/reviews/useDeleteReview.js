import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReviewApi } from "../../service/apiReviews";
import toast from "react-hot-toast";

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteReview, isLoading: isDeleting } = useMutation({
    mutationFn: deleteReviewApi,

    onSuccess: () => {
      toast.success("Review successfully deleted");

      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error(
        "An error occured while deleting this review, please try again"
      );
    },
  });

  return { deleteReview, isDeleting };
};
