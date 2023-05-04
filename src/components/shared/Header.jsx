import React from "react";
import { Link } from "react-router-dom";
import "../../css/header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FcFlashOn } from "react-icons/fc";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav__header">
        <ul className="container-nav__header">
          <li className="li__header">
            <Link to="/">
              Electronix{" "}
              <span className="logo-container__header">
                <FcFlashOn className="logo__header" />
              </span>
            </Link>
          </li>
          <div className="subnav__header">
            <li>
              <Link to="/register">
                <AiOutlineUserAdd />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <CiLogin />
                <span className="menu__header">Login</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <AiOutlineShoppingCart />
              </Link>
            </li>
            <li>
              <Link to="/purchases">
                <BiPurchaseTagAlt />
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
