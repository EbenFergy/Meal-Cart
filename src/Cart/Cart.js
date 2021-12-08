import React, { useContext } from "react";
import CartStyle from "./CartStyle";
import { BackDrop, ModalStyle } from "../Re-usables/Modal/ModalStyle";
import mealContext from "../Contexts/mealContext";

export const BackDropper = ({ closeCart }) => {
  return <BackDrop onClick={closeCart}></BackDrop>;
};

export const Cart = ({ closeCart }) => {
  const { cartList } = useContext(mealContext);
  return (
    <ModalStyle>
      <CartStyle>
        <div className="header">Cart Items</div>
        <div className="cartitems">
          {cartList.map((item) => {
            return (
              <div className="eachItem">
                <div>
                  <img src={item.image} alt={item.name} />
                </div>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div>{item.quantity}</div>
              </div>
            );
          })}
        </div>
      </CartStyle>
    </ModalStyle>
  );
};

// export default Cart;
