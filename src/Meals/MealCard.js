import React, { useState, useContext } from "react";
import mealContext from "../Contexts/mealContext";
import Button from "../Re-usables/Button";
import InputStyle from "../Re-usables/InputStyle";
import _ from "lodash";

const MealCard = ({ calories, image, label }) => {
  const [quantity, setQuantity] = useState(1);

  const { cartList, setCartList } = useContext(mealContext);

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };

  const price = (calories / 98).toFixed(2);

  // console.log("quantityState", quantity);

  const submitHandler = (e) => {
    e.preventDefault();
    const mealDetails = {
      quantity: quantity,
      name: label,
      image: image,
      price: price,
    };

    const mealDetailsLength = Object.keys(mealDetails).length;

    const mealDetailsNoQuant = () => {
      const newMealDetails = { ...mealDetails };
      delete newMealDetails.quantity;
      return newMealDetails;
    };

    const similarItemHandler = _.some(cartList, mealDetailsNoQuant());

    if (mealDetailsLength > 0 && similarItemHandler === false) {
      setCartList((prevCartList) => {
        return [mealDetails, ...prevCartList];
      });
    } else if (similarItemHandler === true) {
      alert("item already in cart");
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
