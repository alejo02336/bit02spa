import React from "react";
import "./CItem.css";
import useAdd from "../../hooks/useAdd";

const CartItem = ({ product }) => {
  const { addAmount, subtractAmount, removeFromCart } = useAdd();
  return (
    <div className="cartItem_container">
      <div className="cart_info">
        <img className="cart_img" src={product.image} alt="" />
        <div>
          <p className="cart_category">{product.category}</p>
          <p className="cart_title">{product.title}</p>
          <p className="cart_rating">Rating: {product.rating.rate}</p>
          <p className="cart_price">$ {product.price}</p>
        </div>
      </div>

      <div className="cart_quantity">
        <button onClick={() => subtractAmount(product)} className="cart_button">
          -
        </button>
        <p className="cart_number">{product.amount}</p>
        <button onClick={() => addAmount(product)} className="cart_button">
          +
        </button>
      </div>
      <div className="cart_total">
        <p className="cart_total_price">$ {product.price * product.amount}</p>
      </div>

      <div>
        <button
          onClick={() => {
            removeFromCart(product);
          }}
          className="delete_button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
