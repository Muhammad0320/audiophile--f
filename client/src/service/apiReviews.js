import axios from "axios";

export const getCurrentUserReview = async () => {
  const res = await axios.get(
    "http://127.0.0.1:3000/api/v1/reviews/my-reviews",
    {
      withCredentials: true,
    }
  );

  return res.data.data.reviews;
};

export const deleteReviewApi = async ({ id }) => {
  const res = await axios({
    method: "DELETE",
    url: `http://127.0.0.1:3000/api/v1/reviews/${id}`,

    withCredentials: true,
  });

  return res.data;
};
