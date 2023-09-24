import axios from "axios";

export const getAllProducts = async () => {
  try {
    const res = await axios.get(`http://127.0.0.1:3000/api/v1/products`);

    return res;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:3000/api/v1/products?category=${category}`
    );

    return res;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
