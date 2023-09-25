import axios from "axios";
import toast from "react-hot-toast";

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

    toast.success("New user successfully created, check your email to confirm");

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
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

  toast.success("Login successful");

  // window.location("/home");

  return res.data;
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response.data.message);
  //   }
};

export const getCurrentUserApi = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:3000/api/v1/users/me");

    toast.success("User loaded successfully");

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
