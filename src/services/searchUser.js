import axios from "axios";

export const searchUser = async (name, password) => {
  await axios
    .get("http://localhost:3001/user", {
      user: name.current.value,
      password: password.current.value,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      if (error.res) {
        console.log(error.res.data);
      }
    });
};
