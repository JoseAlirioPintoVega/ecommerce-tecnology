import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../../css/cartproduct.css";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../store/slices/cart.slice";

const Cartproduct = ({ product }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  const dispatch = useDispatch();

  const handleBtnClick = (e) => {
    e.stopPropagation();
    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";
    const data = {
      id: product.id,
      quantity: 1,
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        dispatch(getUserCart());
      })
      .catch((err) => {
        if (
          err.response.data.message ===
          "You already added this product to the cart"
        ) {
          const URLPatch = "https://e-commerce-api.academlo.tech/api/v1/cart";
          const prevQuantity = cart.filter((e) => e.id === product.id)[0]
            .productsInCart.quantity;
          const dataPatch = {
            id: product.id,
            newQuantity: prevQuantity + 1,
          };
          axios
            .patch(URLPatch, dataPatch, getConfig())
            .then((res) => {
              console.log(res.data);
              dispatch(getUserCart());
            })
            .catch((err) => console.log(err));
        } else {
          console.log(err);
        }
      });
  };
  return (
    <article className="cartproduct-container" onClick={handleClick}>
      <header className="header__cartproduct">
        <img className="product-img" src={product.productImgs[0]} alt="" />
        <img className="product-img" src={product.productImgs[1]} alt="" />
      </header>
      <section className="body__cartproduct">
        <h3 className="title__cartproduct">{product.title}</h3>
        <div className="body-main__cartproduct">
          <article className="contPrice__cartproduct">
            <span className="price-name__cartproduct">Price</span>
            <h4 className="price__cartproduct">$ {product.price}</h4>
          </article>
          <button className="btn-add__cartproduct" onClick={handleBtnClick}>
            <BsFillCartPlusFill className="cart__cartproduct" />
          </button>
        </div>
      </section>
    </article>
  );
};

export default Cartproduct;
