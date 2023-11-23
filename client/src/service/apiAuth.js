import axios from "axios";
import { SERVER_ROOT_URL } from "../utils/constant";

export const signupApi = async ({ name, email, password, passwordConfirm }) => {
  const res = await axios({
    method: "POST",
    url: `${SERVER_ROOT_URL}/users/signup`,
    withCredentials: true,
    data: {
      name,
      email,
      password,
      passwordConfirm,
    },
  });

  return res.data;
};

export const loginApi = async ({ email, password }) => {
  const res = await axios({
    method: "POST",
    url: `${SERVER_ROOT_URL}/users/login`,
    withCredentials: true,
    data: {
      email,
      password,
    },
  });

  return res.data.user;
};

export const logoutApi = async () => {
  const res = await axios({
    method: "POST",
    url: `${SERVER_ROOT_URL}/users/logout`,
    withCredentials: true,
  });

  return res.data;
};

export const forgotPasswordApi = async () => {
  const res = await axios({
    method: "POST",
    url: ` ${SERVER_ROOT_URL}/users/forgotPassword`,
    withCredentials: true,
  });

  return res.data;
};

export const resetPasswordApi = async (token) => {
  const res = await axios({
    method: "PATCH",
    url: `${SERVER_ROOT_URL}/users/passwordReset/${token}`,
    withCredentials: true,
  });

  return res.data;
};
