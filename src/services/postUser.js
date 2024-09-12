import axios from "axios";

export const postUser = async (name,password,mail) => {
    axios
      .post(import.meta.env.API_POST, {
        user: name.current.value,
        password: password.current.value,
        mail: mail.current.value,
      })
      .then((res) => {
        console.log(res);
      });
};
