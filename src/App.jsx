import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "./store/slices/product.slice";
import Productinfo from "./pages/Productinfo";
import Register from "./pages/Register";
import axios from "axios";
import Login from "./pages/Login";
import { getUserCart } from "./store/slices/cart.slice";
import Header from "./components/shared/Header";
import Cart from "./pages/Cart";
import Purchases from "./pages/Purchases";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getUserCart());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Productinfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchases" element={<Purchases />} />
      </Routes>
    </div>
  );
}

export default App;
