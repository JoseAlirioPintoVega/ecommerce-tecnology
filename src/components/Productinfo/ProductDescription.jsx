import axios from "axios";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import getConfig from "../../utils/getConfig";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../store/slices/cart.slice";

const ProductDescription = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [counter, setCounter] = useState(1);

  const handleClickMinus = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1);
    }
  };
  const handleClickPlus = () => {
    setCounter(counter + 1);
  };

  const handlecart = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";
    const data = {
      id: product.id,
      quantity: counter,
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
          const prevQuantity = cart.filter((e) => e.id == product.id)[0]
            .productsInCart.quantity;
          const data = {
            id: product.id,
            newQuantity: prevQuantity + counter,
          };
          axios
            .patch(URLPatch, data, getConfig())
            .then((res) => {
              dispatch(getUserCart());
              console.log(res.data);
            })
            .catch((err) => console.log(err));
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div>
      <article className="productinfo-container">
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>

        <section>
          <p>Price</p>
          <h3>$ {product?.price}</h3>
        </section>
        <section>
          <h3>Quantity</h3>
          <div>
            <div onClick={handleClickMinus}>-</div>
            <div>{counter}</div>
            <div onClick={handleClickPlus}>+</div>
          </div>
        </section>
        <button onClick={handlecart}>
          Add to cart <AiOutlineShoppingCart />
        </button>
      </article>
    </div>
  );
};

export default ProductDescription;
