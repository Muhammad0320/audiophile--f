import axios from "axios";

export const getCurrentUserReview = async () => {
  const res = await axios.get(
    "http://127.0.0.1:3000/api/v1/reviews/my-reviews",
    {
      withCredentials: true,
    }
  );

  console.log(res.data);

  return res.data.data.reviews;
};
