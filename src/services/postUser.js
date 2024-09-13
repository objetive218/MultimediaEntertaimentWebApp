import axios from "axios";

export const postUser = async (name,password,mail) => {
   await axios
     .post("http://localhost:3001/people", {
       user: name.current.value,
       password: password.current.value,
       mail: mail.current.value,
     })
     .then((res) => {
       console.log(res);
     });
};
