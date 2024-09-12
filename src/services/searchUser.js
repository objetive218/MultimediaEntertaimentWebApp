import axios from "axios";

export const searchUser = async (name, password) => {
  axios
    .get(import.meta.env.API_GET_USER, {
      user: name.current.value,
      password: password.current.value,
    })
    .then((res) => {
      console.log(res);
    });
};

