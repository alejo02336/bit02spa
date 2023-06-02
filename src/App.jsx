import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./context/CartContext";

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
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
