import axios from "axios";

export const getCurrentUserReview = () => {
  const res = axios.get("http://127.0.0.1:3000/api/v1/products//my-reviews", {
    withCredentials: true,
  });

  return res.data;
};
