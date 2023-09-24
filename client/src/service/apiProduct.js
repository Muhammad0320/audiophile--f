import axios from "axios";

export const getAllProducts = async () => {
  try {
    const res = await axios.get(`http://127.0.0.1:3000/api/v1/products`);

    console.log(res.data);
  } catch (error) {
    console.log(error.response.data.message);
  }
};
