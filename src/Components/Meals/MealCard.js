import React, { useState, useContext } from "react";
import mealContext from "../../Store/meal-Context";
import Button from "../ReUsables/Button";
import InputStyle from "../ReUsables/InputStyle";
import { useDispatch, useSelector } from "react-redux";
import { cartListActions } from "../../Redux/store";

const MealCard = ({ calories, image, label, id }) => {
  const [quantity, setQuantity] = useState(1);

  // const { addToCartList } = useContext(mealContext);
  const cartList = useSelector((state) => state.cartList.cartList);
  const dispatch = useDispatch();

  // find and return an item in a list using it's id
  const cartListFinder = (list, id) => {
    const checkList = list.find((items) => id === items.id);
    if (checkList) return true;
    else return false;
  };

  const quantityHandler = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const price = parseInt((calories / 98).toFixed(2));

  // console.log("yooo price", typeof price);

  const submitHandler = (e) => {
    e.preventDefault();
    const mealDetails = {
      quantity: quantity,
      name: label,
      image: image,
      price: price,
      id: id,
    };

    // confirm that an entry was made
    const mealDetailsLength = Object.keys(mealDetails).length;
    console.log("mealDetailsLength", mealDetailsLength);

    // if an entry was made, send that entry to the cart context handler component
    // mealDetailsLength > 0 && addToCartList(mealDetails);
    mealDetailsLength > 0 &&
      !cartListFinder(cartList, mealDetails.id) &&
      dispatch(cartListActions.addToCartList(mealDetails));
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
