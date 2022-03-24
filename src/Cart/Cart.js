import React, { useContext } from "react";
import CartStyle from "./CartStyle";
import { BackDrop, ModalStyle } from "../Re-usables/Modal/ModalStyle";
import mealContext from "../Store/meal-Context";
import Button from "../Re-usables/Button";

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
                <div className="image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="itemName">{item.name}</div>
                <div>${item.price}</div>
                <div>{item.quantity}</div>
              </div>
            );
          })}
        </div>
        <div className="footer">
          <Button className="payBtn">Proceed to Pay</Button>
          <Button onClick={closeCart} className="closeBtn">Close</Button>
        </div>
      </CartStyle>
    </ModalStyle>
  );
};

// export default Cart;
