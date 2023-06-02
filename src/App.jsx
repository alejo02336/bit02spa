import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import ProductDetail from "./components/product/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
