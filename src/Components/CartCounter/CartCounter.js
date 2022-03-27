import React, { useState, useContext } from "react";
import Button from "../ReUsables/Button";
import CartCounterStyle from "./CartCounterStyle";
import mealContext from "../../Store/meal-Context";

const CartCounter = ({ id, quantity }) => {
  const [counterValue, setCounterValue] = useState(quantity);

  const { addQuantity, reduceQuantity, addCartPrices } =
    useContext(mealContext);
  const decrement = () => {
    setCounterValue(reduceQuantity(id));
    addCartPrices();
  };

  const increment = () => {
    setCounterValue(addQuantity(id));
    addCartPrices();
  };

  return (
    <CartCounterStyle>
      <Button onClick={decrement}>-</Button>
      <div className="counterValue"> {counterValue} </div>
      <Button onClick={increment}>+</Button>
    </CartCounterStyle>
  );
};

export default CartCounter;
