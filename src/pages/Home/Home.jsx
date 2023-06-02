import React, { useEffect, useState } from "react";
import "./Home.css";
import ProductCard from "../../components/product/ProductCard";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=16");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  return (
    <div>
      <section className="banner">
        <img className="homeBanner" src="./assets/images/banner1.jpg" alt="" />
        <h1>Discover our latest products</h1>
      </section>

      <section className="products">
        <div className="pgrid">
          {products?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
