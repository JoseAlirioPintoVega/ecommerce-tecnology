import React from "react";
import { BsTrash } from "react-icons/bs";
import "../../css/productinCart.css";
import getConfig from "../../utils/getConfig";
import { useDispatch } from "react-redux";
import { getUserCart } from "../../store/slices/cart.slice";
import axios from "axios";

const ProductInCart = ({ prod }) => {
  const dispatch = useDispatch();

  const handleclick = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${prod.id}`;
    axios
      .delete(URL, getConfig())
      .then((res) => {
        dispatch(getUserCart());
      })
      .catch((err) => console.log(err));
  };
  const handleMinus = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";
    const newQuantity = prod.productsInCart.quantity - 1;
    /*   if (newQuantity - 1 > 0) {
      newQuantity -= 1;
    } */
    const data = {
      id: prod.id,
      newQuantity,
    };
    axios
      .patch(URL, data, getConfig())
      .then((res) => {
        dispatch(getUserCart());
      })
      .catch((err) => console.log(err));
  };

  const handlePlus = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";
    const newQuantity = prod.productsInCart.quantity + 1;
    const data = {
      id: prod.id,
      newQuantity,
    };
    axios
      .patch(URL, data, getConfig())
      .then((res) => {
        dispatch(getUserCart());
      })
      .catch((err) => console.log(err));
  };

  return (
    <article className="product-cart-container">
      <div>
        <h3>{prod.brand}</h3>
        <button onClick={handleclick}>
          <BsTrash />
        </button>
      </div>

      <h3>{prod.title}</h3>
      <div>
        <div>
          <p onClick={handleMinus}>-</p>
          <p>{prod.productsInCart.quantity}</p>
          <p onClick={handlePlus}>+</p>
        </div>
        <p>Unit price:</p>
        <span> $ {prod.price}</span>
      </div>
    </article>
  );
};

export default ProductInCart;
