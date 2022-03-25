import React, { useState, useContext } from "react";
import Button from "../ReUsables/Button";
import CartCounterStyle from "./CartCounterStyle";
import mealContext from "../../Store/meal-Context";

const CartCounter = ({ id, quantity }) => {
  //   const [counterValue, setCounterValue] = useState(quantity);

  const { cartList } = useContext(mealContext);
  const decrement = () => {};
  const increment = () => {};
  return (
    <CartCounterStyle>
      <Button onClick={decrement}>-</Button>
      <div className="counterValue"> {quantity} </div>
      <Button onClick={increment}>+</Button>
    </CartCounterStyle>
  );
};

export default CartCounter;
