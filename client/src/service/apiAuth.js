import axios from "axios";

export const signupApi = async ({ name, email, password, passwordConfirm }) => {
  try {
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

    console.log(res);

    return res.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
