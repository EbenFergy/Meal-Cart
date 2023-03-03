import React from "react";
import Button from "../ReUsables/Button";
import CartCounterStyle from "./CartCounterStyle";
import { useDispatch } from "react-redux";
import { cartListActions } from "../../Redux/store";

const CartCounter = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch(cartListActions.reduceQuantity(id));
  };

  const increment = () => {
    dispatch(cartListActions.addQuantity(id));
  };

  return (
    <CartCounterStyle>
      <Button onClick={decrement}>-</Button>
      <div className="counterValue"> {quantity} </div>
      <Button onClick={increment}>+</Button>
    </CartCounterStyle>
  );
};

export default CartCounter;
