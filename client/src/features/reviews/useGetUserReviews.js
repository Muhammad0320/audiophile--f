import { useQuery } from "@tanstack/react-query";
import { getCurrentUserReview } from "../../service/apiReviews";

export const useGetUserReview = () => {
  const { data: reviews, isLoading } = useQuery({
    queryFn: getCurrentUserReview,

    queryKey: ["review"],
  });

  return { reviews, isLoading };
};
