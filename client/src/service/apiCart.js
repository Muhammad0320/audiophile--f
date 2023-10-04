import axios from "axios";
// https://dev.to/github20k/7-open-source-projects-you-should-contribute-to-in-2023-1nph
export const getMyCart = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:3000/api/v1/carts/myCart", {
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
    url: `http://127.0.0.1:3000/api/v1/products/${id}/cart`,
    withCredentials: true,
    data,
  });

  return res.data;
};

export const sendBulkItemToCart = async ({ changes }) => {
  const res = await axios({
    method: "POST",
    url: "http://127.0.0.1:3000/api/v1/carts/bulkSend",
    withCredentials: true,
    data: {
      changes,
    },
  });

  return res.data;
};
