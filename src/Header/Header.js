import React, { useState, useContext } from "react";
import HeaderStyle from "./HeaderStyle";
import CartImg from "../assets/cart-img.svg";
import Button from "../Re-usables/Button";
import leaves from "../assets/leaves.png";
import GlassCard from "../Re-usables/GlassCard";
import ReactDOM from "react-dom";
import { Cart, BackDropper } from "../Cart/Cart";
import mealContext from "../Contexts/mealContext";

const DUMMY_LIST = [];

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  // const [cartList, setCartList] = useState([]);

  // const mealDLength = Object.keys(mealD).length;

  const viewCartHandler = () => {
    setCartOpen(true);

    // if (mealDLength > 0) {
    //   setCartList((prevCartList) => {
    //     return [mealD, ...prevCartList];
    //   });
    // }

    // setMealD("");
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  // console.log("HeaderCartList", cartList);

  return (
    <HeaderStyle>
      <nav>
        <h2>MealCart</h2>
        <Button className="button" onClick={viewCartHandler}>
          <img src={CartImg} alt="cart-img" /> <span>View Cart </span>
          <span className="orderno"> 3 </span>
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
