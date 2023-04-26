import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cardproduct from "../components/Home/Cardproduct";
import ProductInCart from "../components/Cart/ProductInCart";
import axios from "axios";
import getConfig from "../utils/getConfig";
import { getUserCart } from "../store/slices/cart.slice";

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
    <div>
      <h2>Cart Shop</h2>
      <div>
        {cardProduct?.map((prod) => (
          <ProductInCart key={prod.id} prod={prod} />
        ))}
      </div>
      <footer>
        <span>Total:</span>
        <p>
          {cardProduct
            ? cardProduct.reduce((acc, cv) => {
                return cv.price * cv.productsInCart.quantity + acc;
              }, 0)
            : 0}
        </p>
        <button onClick={handleCheckout}>Checkout</button>
      </footer>
    </div>
  );
};

export default Cart;
