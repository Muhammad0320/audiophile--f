import axios from "axios";
import { SERVER_ROOT_URL } from "../utils/constant";
// https://dev.to/github20k/7-open-source-projects-you-should-contribute-to-in-2023-1nph
export const getMyCart = async () => {
  try {
    const res = await axios.get(`${SERVER_ROOT_URL}/carts/myCart`, {
      withCredentials: true,
    });

    return res?.data?.data?.cart || [];
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const createNewCartItemOnUser = async ({ id, data }) => {
  const res = await axios({
    method: "POST",
    url: `${SERVER_ROOT_URL}/products/${id}/cart`,
    withCredentials: true,
    data,
  });

  return res.data;
};

export const sendBulkItemToCart = async ({ changes }) => {
  const res = await axios({
    method: "POST",
    url: `${SERVER_ROOT_URL}/carts/bulkSend`,
    withCredentials: true,
    data: {
      changes,
    },
  });

  return res.data;
};

export const deleteCartOnCheckout = async () => {
  const res = await axios({
    method: "DELETE",
    url: `${SERVER_ROOT_URL}/carts/deleteCartCheckout`,
    withCredentials: true,
  });

  console.log(res.data);

  return res.data;
};
