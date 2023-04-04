import React, { useState } from "react";
import Button from "../ReUsables/Button";
import InputStyle from "../ReUsables/InputStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddToCartListMutation,
  useGetCartListQuery,
  useAddQuantityMutation,
} from "../../Redux/slices/cartApiSlice";
import { UIActions } from "../../Redux/slices/UI_slice";

const MealCard = ({ calories, image, label, id }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const [addToCartList] = useAddToCartListMutation();
  const [addQuantity] = useAddQuantityMutation();
  const { data: cartList, isSuccess } = useGetCartListQuery();

  const quantityHandler = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const price = parseInt((calories / 98).toFixed(2));

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(
      UIActions.showNotification({
        status: "pending",
        title: "Sending!",
        message: "adding to cart",
      })
    );

    const mealDetails = {
      quantity: quantity,
      name: label,
      image: image,
      price: price,
      id: id,
    };

    // confirm that an entry was made
    const mealDetailsLength = Object.keys(mealDetails).length;

    // if an entry was made, send that entry
    // check if it exists in cartList

    try {
      let newList;
      if (isSuccess) {
        newList = JSON.parse(JSON.stringify(cartList));
      }
      let itemExist = newList.find((item) => item.id === mealDetails.id);
      if (mealDetailsLength > 0) {
        if (itemExist) {
          itemExist.quantity += 1;
          await addQuantity(newList);
        } else {
          await addToCartList(mealDetails);
        }
      }

      dispatch(
        UIActions.showNotification({
          status: "success",
          title: "Sent!",
          message: "added to cart",
        })
      );

      setTimeout(() => {
        dispatch(UIActions.showNotification(null));
      }, 2000);
    } catch (err) {
      dispatch(
        UIActions.showNotification({
          status: "failed",
          title: "Error!",
          message: "couldn't add to cart",
        })
      );
    }
  };

  return (
    <div key={calories} className="mainMeal">
      <div className="meal-cont">
        <img src={image} alt={label} />
      </div>

      <div className="innerMeal">
        <div className="meal-cont">
          <img src={image} alt={label} />
        </div>
        <div className="meal-cont__detail">
          <div className="meal-name">
            <p> {label}</p>
          </div>
          <div className="meal-form">
            <div className="meal-price">${price}</div>
            <form onSubmit={submitHandler}>
              <div className="input-cont">
                <InputStyle
                  type="number"
                  step="1"
                  min="1"
                  max="5"
                  defaultValue="1"
                  className="amountInput"
                  onChange={quantityHandler}
                />
              </div>
              <Button type="submit" className="addBtn">
                Add to cart
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
