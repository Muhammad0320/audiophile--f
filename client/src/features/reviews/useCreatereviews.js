import { useMutation } from "@tanstack/react-query";
import { createReviewApi } from "../../service/apiReviews";

import { toast } from "react-hot-toast";

export const useCreateReview = () => {
  const { isLoading: isCreating, mutate: createReview } = useMutation({
    mutationFn: createReviewApi,

    onSuccess: () => {
      toast.success("Review added successfully");
    },

    onError: (error) => {
      toast.error(error.data.response.message);
    },
  });

  return { createReview, isCreating };
};
