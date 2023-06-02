import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/bit02spa" element={<Home />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route
            path="/bit02spa/productDetail/:productId"
            element={<ProductDetail />}
          />
          <Route path="/bit02spa/cart" element={<Cart />} />
          <Route path="/bit02spa/login/*" element={<Login />} />
          <Route path="/bit02spa/register/*" element={<Register />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
