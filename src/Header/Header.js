import React from "react";
import HeaderStyle from "./HeaderStyle";
import CartImg from "../assets/cart-img.svg";
import Button from "../Re-usables/Button";

const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <h2>MealCart</h2>
        <Button className="button">
          <img src={CartImg} alt="cart-img" /> <span>View Cart </span>{" "}
          <span className="orderno"> 3 </span>
        </Button>
      </nav>
      <div className="header-img"></div>
    </HeaderStyle>
  );
};

export default Header;
