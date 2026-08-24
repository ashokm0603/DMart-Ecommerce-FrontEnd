import "../assets/loginStylings.css"
function Login() {
    return (
        <form action="">
            <fieldset>
                <label htmlFor="">Username </label>
                <input type="text" placeholder="Enter Username" />
                <br /><br />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter password" />
                <br /><br />
                <div className="btn">
                    <button>Sign-In</button>
                    <button>Cancel</button>
                </div>
            </fieldset>
        </form>
    )
}
export default Login;