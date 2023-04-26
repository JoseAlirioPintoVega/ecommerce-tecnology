import React from "react";
import { useDispatch } from "react-redux";
import {
  ascendingOrderProducts,
  descendingOrderProducts,
} from "../../store/slices/product.slice";

const ToOrderProducts = () => {
  const dispatch = useDispatch();

  const handleAscending = () => {
    dispatch(ascendingOrderProducts());
  };
  const handleDescending = () => {
    dispatch(descendingOrderProducts());
  };
  return (
    <div>
      <button onClick={handleAscending}>Ascending Order</button>
      <button onClick={handleDescending}>Descending Order</button>
    </div>
  );
};

export default ToOrderProducts;
