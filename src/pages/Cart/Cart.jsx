import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import CartItem from "../../components/cart/CartItem";
import Resume from "../../components/cart/Resume";

const Cart = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <div>
      <div className="cart_container">
        <div>
          {cartProducts &&
            cartProducts.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
        </div>
        <Resume />
      </div>
    </div>
  );
};

export default Cart;
