import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cardproduct from "../components/Home/Cardproduct";
import ProductInCart from "../components/Cart/ProductInCart";
import axios from "axios";
import getConfig from "../utils/getConfig";
import { getUserCart } from "../store/slices/cart.slice";
import "../css/cart.css";

const Cart = () => {
  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  const dispatch = useDispatch();
  const cardProduct = useSelector((state) => state.cart);
  const handleCheckout = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        dispatch(getUserCart());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="cart-container">
      <h2 className="title__cart">Cart Shop</h2>
      <div className="prod-container__cart">
        {cardProduct?.map((prod) => (
          <ProductInCart key={prod.id} prod={prod} />
        ))}
      </div>
      <footer>
        <div className="footer__cart">
          <span className="text-total__cart">Total:</span>
          <p className="number-total__cart">
            ${" "}
            {cardProduct
              ? cardProduct.reduce((acc, cv) => {
                  return cv.price * cv.productsInCart.quantity + acc;
                }, 0)
              : 0}
          </p>
        </div>
        <div className="btn-container">
          <button className="btn-checkout__cart" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
