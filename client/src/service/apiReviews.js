import axios from "axios";
import { SERVER_ROOT_URL } from "../utils/constant";

export const getCurrentUserReview = async () => {
  const res = await axios.get(`${SERVER_ROOT_URL}/reviews/my-reviews`, {
    withCredentials: true,
  });

  return res.data.data.reviews;
};

export const createReviewApi = async ({ id, data }) => {
  const res = await axios({
    url: `${SERVER_ROOT_URL}/products/${id}/review`,
    method: "POST",
    data,
    withCredentials: true,
  });

  return res.data;
};

export const deleteReviewApi = async ({ id }) => {
  const res = await axios({
    method: "DELETE",
    url: `${SERVER_ROOT_URL}/reviews/${id}`,

    withCredentials: true,
  });

  return res.data;
};

export const updateReviewApi = async ({ id, data }) => {
  const res = await axios({
    method: "PATCH",
    url: `${SERVER_ROOT_URL}/reviews/${id}`,
    data,
    withCredentials: true,
  });

  return res.data;
};
