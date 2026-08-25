import { useState } from "react";
import "../assets/loginStylings.css"
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            console.log(username);
            console.log(password);
            localStorage.setItem("userName", username)
            localStorage.setItem("Password", password)
            toast.success("login successful");

            setTimeout(() => {
                navigate("/home")
            }, 3000)
        } catch (error) {
            console.log(error);
            toast.error("failed to login")
        }
    }


    return (
        <form action="" style={{ height: "100vh" }} onSubmit={handleSubmit}>
            <fieldset>

                <h1>Login Form</h1>

                <label htmlFor="">Username </label>
                <input type="text" onChange={(e) => {
                    setUsername(e.target.value)
                }} placeholder="Enter Username" />
                <br /><br />
                <label htmlFor="">Password</label>
                <input type="password" onChange={(e) => {
                    setPassword(e.target.value)
                }} placeholder="Enter password" />
                <br /><br />
                <div className="btn">
                    <button type="submit">Sign-In</button>
                    <button type="reset">Cancel</button>
                </div>


            </fieldset>

            <ToastContainer />
        </form>
    )
}
export default Login;