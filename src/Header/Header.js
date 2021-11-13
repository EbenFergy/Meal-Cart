import React from "react";
import HeaderStyle from "./HeaderStyle";
import CartImg from "../assets/cart-img.svg";
import Button from "../Re-usables/Button";
import leaves from "../assets/leaves.png";

const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <h2>MealCart</h2>
        <Button className="button">
          <img src={CartImg} alt="cart-img" /> <span>View Cart </span>
          <span className="orderno"> 3 </span>
        </Button>
      </nav>

      <div className="header-cont">
        <img src={leaves} className='leaves' alt='leaves-img'/>
        <div className="header-img">{/* <img src={headerImg} /> */}</div>
        <div className="header-txt">
          <div className="header-Desc">
            Get recipes to all <br /> your favorite Meals
            <div className="header-Subdesc">Over a thousand food recipes</div>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
