import { useRef } from "react";
import { postUser } from "../services/postUser";

const CreateUser = () => {
    const username = useRef();
    const password = useRef();
    const mail = useRef();
    const getFormData = async(e) => {
        e.preventDefault();
       await postUser(username,password,mail)
    }
    return (
        <div className="createUser">
            <h2 className="titleForm">Create an account </h2>
            <form  className="createUserForm" onSubmit={(e) => getFormData(e)}>
                <label htmlFor="">Username</label><input type="text" ref={username}/>
                <label htmlFor="">Password</label><input type="password" ref={password}/>
                <label htmlFor="">Mail</label><input type="email" ref={mail}/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default CreateUser;
