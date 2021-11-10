import React, { useState } from "react";
import MealStyle from "./MealStyle";
import Button from "../Re-usables/Button";
import InputStyle from "../Re-usables/InputStyle";

const arrayMan = [1, 2, 3, 45, 6, 7, 8, 9, 0];

const Meals = () => {
  const [transformVal, setTransformVal] = useState("");

  const transform = () => {
    setTimeout(() => {
      return setTransformVal("scale(1.2)");
    }, 200);
  };

  return (
    <MealStyle transformVal={transformVal}>
      {arrayMan.map((item) => {
        return (
          <div
            className="mainMeal"
            onMouseOver={transform}
            onMouseLeave={() => setTransformVal("")}
          >
            <div>
              <div className="meal-cont">
                <div className="mealOverlay"></div>
              </div>
              <div className="meal-cont__detail">
                <div className="meal-name">
                  Spaghetti <span>$5.00</span>
                </div>
                <form>
                  <div className="input-cont">
                    <InputStyle
                      name="Amount"
                      type="number"
                      step="1"
                      min="1"
                      max="5"
                      defaultValue="1"
                      className="amountInput"
                    />
                  </div>
                  <Button type="submit" className="addBtn">
                    Add to cart
                  </Button>
                </form>
              </div>
            </div>

            <div className="innerMeal"></div>
          </div>
        );
      })}
    </MealStyle>
  );
};

export default Meals;
