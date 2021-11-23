import React from "react";
import CartStyle from "./CartStyle";
import { BackDrop } from "../Re-usables/Modal/ModalStyle";

const Cart = () => {
  return (
    <BackDrop>
      <CartStyle>
        <div className="header">Cart Items</div>
      </CartStyle>
    </BackDrop>
  );
};

export default Cart;
