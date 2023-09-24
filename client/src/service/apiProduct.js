import axios from "axios";

export const getAllProducts = async () => {
  try {
    const res = await axios.get(`http://127.0.0.1:3000/api/v1/products`);

    return res.data.data.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:3000/api/v1/products?category=${category}`
    );

    return res.data.data.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:3000/api/v1/products/${slug}`
    );
    console.log(res);

    return res.data.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`http://127.0.0.1:3000/api/v1/products/${id}`);

    console.log(res.data);

    return res.data.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};
