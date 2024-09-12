/* eslint-disable react/prop-types */
import { useRef } from "react";
import { searchUser } from "../services/searchUser";

const Login = ({step, setStep}) => {
    const username = useRef();
    const password = useRef();
    const handleForm = async(e) => {
        e.preventDefault();
        await searchUser(username,password);
    }
    return (
        <div className="createUser">
            <h2 className="titleForm">Log in</h2>
            <form  className="createUserForm" onSubmit={(e) => handleForm(e)}>
                <input type="text" ref={username} placeholder="Username"/>
                <input type="password" ref={password} placeholder="Password"/>
                <button type="submit">Log in</button>
            </form>
            <a onClick={() => {setStep({...step, visibility:true})}} href="#">You don´t have an account? click here to register</a>
        </div>
    );
}

export default Login;
