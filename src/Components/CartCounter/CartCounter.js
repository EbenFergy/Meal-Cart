import React, { useState, useContext } from "react";
import Button from "../ReUsables/Button";
import CartCounterStyle from "./CartCounterStyle";
// import mealContext from "../../Store/meal-Context";
import { useDispatch } from "react-redux";
import { cartListActions } from "../../Redux/store";

const CartCounter = ({ id, quantity }) => {
  const [counterValue, setCounterValue] = useState(quantity);

  const dispatch = useDispatch();

  // const { addQuantity, reduceQuantity, addCartPrices } =
  //   useContext(mealContext);

  const decrement = () => {
    // setCounterValue(reduceQuantity(id));
    // addCartPrices();
    dispatch(cartListActions.reduceQuantity(id));
  };

  const increment = () => {
    // setCounterValue(addQuantity(id));
    // addCartPrices();
    dispatch(cartListActions.addQuantity(id));
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
