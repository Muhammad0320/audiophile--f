import axios from "axios";

export const getMyCart = async () => {
  const res = await axios.get("http://127.0.0.1:3000/api/v1/carts/myCart", {
    withCredentials: true,
  });

  return res.data.data.cart;
};
