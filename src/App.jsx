import NavBar from "./NavBar";
import Register from "./pages/Register";
import "./assets/loginStylings.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div>
      <NavBar />
      <h1>welcome to React JS</h1>
      <Register />
    </div>
  )

}

export default App;