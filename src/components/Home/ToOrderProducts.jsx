import React from "react";
import { useDispatch } from "react-redux";
import {
  ascendingOrderProducts,
  descendingOrderProducts,
} from "../../store/slices/product.slice";
import "../../css/toOrderProducts.css";

const ToOrderProducts = () => {
  const dispatch = useDispatch();

  const handleAscending = () => {
    dispatch(ascendingOrderProducts());
  };
  const handleDescending = () => {
    dispatch(descendingOrderProducts());
  };
  return (
    <div className="order-container">
      <button className="btn asc" onClick={handleAscending}>
        Ascending Order
      </button>
      <button className="btn des" onClick={handleDescending}>
        Descending Order
      </button>
    </div>
  );
};

export default ToOrderProducts;
