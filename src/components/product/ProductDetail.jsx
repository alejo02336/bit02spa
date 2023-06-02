import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetail.css";
import useAdd from "../../hooks/useAdd";

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useAdd();

  return (
    <div className="detail_container">
      <img className="detail_img" src={state.product.image} alt="" />

      <div className="detail_info">
        <p className="detail_category">{state.product.category}</p>
        <p className="detail_title">{state.product.title}</p>
        <p className="detail_rating">Rating: {state.product.rating.rate}</p>
        <p className="detail_price">$ {state.product.price}</p>
        <p className="detail_description">{state.product.description}</p>

        <div>
          <button onClick={() => addToCart(state.product)} className="add_cart">
            Add to cart
          </button>
          <button
            onClick={() => navigate("/bit02spa/cart")}
            className="go_cart add_cart"
          >
            Go to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
