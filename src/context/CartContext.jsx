import React, { useEffect } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [productCount, setProductCount] = React.useState(0);
  const [cartProducts, setCartProducts] = React.useState([]);

  useEffect(() => {
    getAllProducts();
    getProductCount();
  }, []);

  const getAllProducts = () => {
    const cart = JSON.parse(localStorage.getItem("cartProducts"));
    setCartProducts(cart);
    return cart;
  };

  const getProductCount = () => {
    let count = 0;
    const cart = JSON.parse(localStorage.getItem("cartProducts"));
    if (cart) {
      cart.map((product) => {
        count += product.amount;
      });
    }
    setProductCount(count);
    return count;
  };

  return (
    <CartContext.Provider
      value={{
        productCount,
        setCartProducts,
        getAllProducts,
        getProductCount,
        cartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
