import React from "react";
import Button from "../ReUsables/Button";
import CartCounterStyle from "./CartCounterStyle";
import { useDispatch } from "react-redux";
import {
  useGetCartListQuery,
  useAddQuantityMutation,
} from "../../Redux/slices/cartApiSlice";
import { UIActions } from "../../Redux/slices/UI_slice";

const CartCounter = ({ id, quantity }) => {
  const dispatch = useDispatch();
  const { isSuccess, data: cartList } = useGetCartListQuery();
  const [addQuantity] = useAddQuantityMutation();

  let newList;
  if (isSuccess) {
    newList = JSON.parse(JSON.stringify(cartList));
  }
  let itemExist = newList.find((item) => item.id === id);

  const decrement = async () => {
    try {
      if (itemExist) {
        itemExist.quantity -= 1;
        await addQuantity(newList);
      }
    } catch (err) {
      dispatch(
        UIActions.showNotification({
          status: "failed",
          title: "Error!",
          message: "sending data failed",
        })
      );
    }
  };

  const increment = async () => {
    try {
      if (itemExist) {
        itemExist.quantity += 1;
        await addQuantity(newList);
      }
    } catch (err) {
      dispatch(
        UIActions.showNotification({
          status: "failed",
          title: "Error!",
          message: "sending data failed",
        })
      );
    }
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
