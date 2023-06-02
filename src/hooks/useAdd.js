import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Notyf } from "notyf";
const useAdd = () => {
  const { getProductCount, getAllProducts } = useContext(CartContext);

  const addToCart = (product) => {
    const products = getAllProducts();

    if (products) {
      const id = products.find((p) => p.id === product.id);
      if (id) {
        id.amount += 1;
        localStorage.setItem("cartProducts", JSON.stringify(products));
        getProductCount();
        getAllProducts();
      } else {
        const newProduct = { ...product, amount: 1 };
        localStorage.setItem(
          "cartProducts",
          JSON.stringify([...products, newProduct])
        );
        getProductCount();
        getAllProducts();
      }
    } else {
      const newProduct = { ...product, amount: 1 };
      localStorage.setItem("cartProducts", JSON.stringify([newProduct]));
      getProductCount();
      getAllProducts();
    }

    // Create an instance of Notyf
    const notyf = new Notyf();

    // Display an error notification
    notyf.success("Product added to cart");
  };

  const removeFromCart = (product) => {
    const products = getAllProducts();
    const id = products.find((p) => p.id === product.id);
    if (id) {
      const newProducts = products.filter((p) => p.id !== product.id);
      localStorage.setItem("cartProducts", JSON.stringify(newProducts));
      getProductCount();
      getAllProducts();
    }

    // Create an instance of Notyf
    const notyf = new Notyf();

    // Display an error notification
    notyf.error("Product removed from cart");
  };

  const addAmount = (product) => {
    const products = getAllProducts();
    const id = products.find((p) => p.id === product.id);
    if (id) {
      id.amount += 1;
      localStorage.setItem("cartProducts", JSON.stringify(products));
      getProductCount();
      getAllProducts();
    }
  };

  const subtractAmount = (product) => {
    const products = getAllProducts();
    const id = products.find((p) => p.id === product.id);
    if (id) {
      if (id.amount > 1) {
        id.amount -= 1;
        localStorage.setItem("cartProducts", JSON.stringify(products));
        getProductCount();
        getAllProducts();
      } else {
        removeFromCart(product);
      }
    }
  };

  return {
    addToCart,
    removeFromCart,
    addAmount,
    subtractAmount,
    getAllProducts,
  };
};

export default useAdd;
