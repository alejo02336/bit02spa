import React, { useContext } from "react";
import "./Resume.css";
import { CartContext } from "../../context/CartContext";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

const Resume = () => {
  const { cartProducts } = useContext(CartContext);
  const error = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You need to log in to proceed with the payment!",
    });
  };
  return (
    <div className="resumen">
      <p>Billing summary: </p>
      {cartProducts && (
        <div className="inner_resume">
          {cartProducts.map((product) => (
            <div className="resume_info">
              <p className="inner_title">{product.title}</p>

              <div className="pricing_details">
                <span>
                  {product.price} x {product.amount} ={" "}
                  {product.price * product.amount}
                </span>
              </div>
            </div>
          ))}
          <div className="total">
            <p>
              Total:{" "}
              {cartProducts.reduce(
                (acc, product) => acc + product.price * product.amount,
                0
              )}
            </p>
            <button onClick={error} className="pay_button">
              Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
