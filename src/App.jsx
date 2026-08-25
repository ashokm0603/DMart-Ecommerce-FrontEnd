import NavBar from "./NavBar";
import Register from "./pages/Register";
import "./assets/loginStylings.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import UpdateProducts from "./pages/UpdateProducts";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="update-products" element={<UpdateProducts />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;