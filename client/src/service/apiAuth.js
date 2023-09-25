import axios from "axios";

export const signupApi = async ({ name, email, password, passwordConfirm }) => {
  const res = await axios({
    method: "POST",
    url: "http://127.0.0.1:3000/api/v1/users/signup",
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
    url: "http://127.0.0.1:3000/api/v1/users/login",
    data: {
      email,
      password,
    },
  });

  return res.data;
};

export const getCurrentUserApi = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:3000/api/v1/users/me");
    return res.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
