import React from "react";
import CartStyle from "./CartStyle";
import { BackDrop, ModalStyle } from "../Re-usables/Modal/ModalStyle";
import { useState } from "react/cjs/react.development";

const DUMMY_LIST = [];

export const BackDropper = ({ closeCart }) => {
  return <BackDrop onClick={closeCart}></BackDrop>;
};

export const Cart = ({ closeCart, itemObject }) => {
  const [cartList, setCartList] = useState(DUMMY_LIST);

  // const newDUMMY_LIST = () => {
  //   setCartList((prevCartList) => {
  //     return [itemObject, ...prevCartList];
  //   });
  // };

  // newDUMMY_LIST();

  // console.log("itemObject", itemObject);

  return (
    <ModalStyle>
      <CartStyle>
        <div className="header">Cart Items</div>
        <div className=""></div>
      </CartStyle>
    </ModalStyle>
  );
};

// export default Cart;
