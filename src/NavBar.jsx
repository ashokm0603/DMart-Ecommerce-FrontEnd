import { Outlet, Link } from "react-router-dom";
import "./assets/navStylings.css";

const NavBar = () => {
    return (
        <>
            <nav>
                <ol>
                    <li> <Link to="/home">Home</Link>   </li>
                    <li> <Link to="/products">Products</Link>   </li>
                    <li> <Link to="/update-products">Update Products</Link>   </li>
                    <li> <Link to="/cart">Cart</Link>   </li>
                    <li> <Link to="/register">Register</Link>   </li>
                    <li> <Link to="/about">About</Link>   </li>
                    <li>
                        <button>
                            <Link to="/">Logout</Link>
                        </button>
                    </li>
                </ol>
            </nav>
            <Outlet />
        </>
    )
}
export default NavBar;