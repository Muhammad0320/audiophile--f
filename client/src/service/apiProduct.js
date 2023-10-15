import axios from "axios";
import { SERVER_ROOT_URL } from "../utils/constant";

export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${SERVER_ROOT_URL}/products`);

    return res.data.data.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const res = await axios.get(
      `${SERVER_ROOT_URL}/products?category=${category}`
    );

    return res.data.data.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const res = await axios.get(`${SERVER_ROOT_URL}/products/slug/${slug}`);

    return res.data.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${SERVER_ROOT_URL}/products/${id}`);

    return res.data.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};
