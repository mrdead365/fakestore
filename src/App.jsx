import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleProduct from "./components/products/SingleProduct";
import Catproducts from "./pages/Catproducts";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
      setCart([...cart, product]);
      
  };

  const removeFromCart = (index) => {
      const newCart = cart.filter((item, i) => i !== index);
      setCart(newCart);
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/categories/:name" element={<Catproducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<SingleProduct addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />

       
      </Routes>
    </Router>
  );
};

export default App;
