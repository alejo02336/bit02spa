import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import useAdd from "../../hooks/useAdd";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useAdd();

  const handleProductClick = () => {
    navigate(`/bit02spa/productDetail/${product.id}`, {
      state: {
        product,
      },
    });
  };

  return (
    <div className="card_container">
      <img
        onClick={handleProductClick}
        className="product_image"
        src={product.image}
        alt=""
      />
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
