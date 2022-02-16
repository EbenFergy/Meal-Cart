import React, { useState, useContext } from "react";
import HeaderStyle from "./HeaderStyle";
import CartImg from "../assets/cart-img.svg";
import Button from "../Re-usables/Button";
import leaves from "../assets/leaves.png";
import GlassCard from "../Re-usables/GlassCard";
import ReactDOM from "react-dom";
import { Cart, BackDropper } from "../Cart/Cart";
import mealContext from "../Contexts/meal-Context";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const {cartList} = useContext(mealContext);
  
  const viewCartHandler = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  let cartListLength = cartList.length

  return (
    <HeaderStyle>
      <nav>
        <h2>MealCart</h2>
        <Button className="button" onClick={viewCartHandler}>
          <img src={CartImg} alt="cart-img" /> <span>View Cart </span>
          <span className="orderno"> {cartListLength} </span>
        </Button>
      </nav>

      <div className="header-cont">
        <GlassCard className="glassCard"></GlassCard>
        <GlassCard className="glassCard"></GlassCard>
        <img src={leaves} className="leaves" alt="leaves-img" />
        <div className="header-img">{/* <img src={headerImg} /> */}</div>
        <div className="header-txt">
          <div className="header-Desc">
            Get recipes to all <br /> your favorite Meals
            <div className="header-Subdesc">Over a thousand food recipes</div>
          </div>
        </div>
      </div>

      {cartOpen
        ? ReactDOM.createPortal(
            <Cart closeCart={closeCart} />,
            document.getElementById("modal")
          )
        : null}
      {cartOpen
        ? ReactDOM.createPortal(
            <BackDropper closeCart={closeCart} />,
            document.getElementById("backDrop")
          )
        : null}
    </HeaderStyle>
  );
};

export default Header;
