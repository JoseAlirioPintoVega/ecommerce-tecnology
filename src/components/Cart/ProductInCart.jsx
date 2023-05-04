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
      <div className="infoprod__prodInCart">
        <h3 className="title__prodInCart">{prod.title}</h3>
        <div className="counter__prodInCart">
          <p className="minus__prodInCart" onClick={handleMinus}>
            -
          </p>
          <p className="number-counter__prodInCart">
            {prod.productsInCart.quantity}
          </p>
          <p className="plus__prodInCart" onClick={handlePlus}>
            +
          </p>
          <button className="btn-trash__prodInCart" onClick={handleclick}>
            <BsTrash className="icon-trash" />
          </button>
        </div>
        <div>
          <p className="text-price__prodInCart">Unit price:</p>
          <span className="price__prodInCart"> $ {prod.price}</span>
        </div>
      </div>
      <div className="line"></div>
    </article>
  );
};

export default ProductInCart;
