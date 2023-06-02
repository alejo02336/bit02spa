import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  /*  const { product } = route.params; */

  const { state } = useLocation();

  return <div>ProductDetail</div>;
};

export default ProductDetail;
