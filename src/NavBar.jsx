import "./assets/navStylings.css";

const NavBar=()=>{
    return (
            <nav>
                <ol>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Cart</li>
                    <li>Orders</li>
                    <li>About</li>
                    <li>
                        <button>Logout</button>
                    </li>
                </ol>
            </nav>
    )  
}
export default NavBar;