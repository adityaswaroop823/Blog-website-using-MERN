import Nav from "./components/Nav";
import "./App.css";
import Signup from "./components/SignUp";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing Component</h1>}></Route>
          <Route path="/add" element={<h1>Add Product Component</h1>}></Route>
          <Route
            path="/update"
            element={<h1>Update Product Component</h1>}
          ></Route>
          <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
          <Route
            path="/profile"
            element={<h1>User Profile Component</h1>}
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      <div className="footer-div">
        <Footer />
      </div>
    </div>
  );
}

export default App;
