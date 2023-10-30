import axios from "axios";
import { SERVER_ROOT_URL } from "../utils/constant";

export const getCurrentUserApi = async () => {
  try {
    const res = await axios.get(`${SERVER_ROOT_URL}/users/me`, {
      withCredentials: true,
    });

    return res.data.data.user;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const updateUserData = async ({ email, name, photo }) => {
  const form = new FormData();

  form.append("name", name);
  form.append("email", email);
  form.append("photo", photo);

  const res = await axios({
    method: "PATCH",
    url: `${SERVER_ROOT_URL}/users/updateMe`,
    withCredentials: true,

    data: form,
  });

  return res.data;
};

export const updateUserPassword = async ({
  password,
  currentPassword,
  passwordConfirm,
}) => {
  const res = await axios({
    method: "PATCH",
    url: `${SERVER_ROOT_URL}/users/updatePassword`,
    withCredentials: true,
    data: {
      currentPassword,
      password,
      passwordConfirm,
    },
  });

  return res.data;
};

export const deleteUserApi = async ({ currentPassword }) => {
  const res = await axios({
    method: "DELETE",
    url: `${SERVER_ROOT_URL}/users/deleteMe`,
    withCredentials: true,
    data: {
      currentPassword,
    },
  });

  console.log(res.data);
  return res.data;
};
