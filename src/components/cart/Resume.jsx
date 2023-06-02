import React, { useContext } from "react";
import "./Resume.css";
import { CartContext } from "../../context/CartContext";

const Resume = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <div className="resumen">
      <p>Lista de productos:</p>
      {cartProducts && (
        <div>
          {cartProducts.map((product) => (
            <div>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.amount}</p>
              <p>{product.price * product.amount}</p>
            </div>
          ))}
          <p>
            Total:{" "}
            {cartProducts.reduce(
              (acc, product) => acc + product.price * product.amount,
              0
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Resume;
