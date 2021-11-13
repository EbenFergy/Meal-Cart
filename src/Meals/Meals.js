import React from "react";
import MealStyle from "./MealStyle";
import Button from "../Re-usables/Button";
import InputStyle from "../Re-usables/InputStyle";

// const arrayMan = [1, 2, 3, 45, 6, 7, 8, 9, 0];

const Meals = ({ apiData }) => {
  return (
    <MealStyle>
      {apiData.map((recipe) => {
        return (
          <div className="mainMeal">
            <div>
              <div className="meal-cont">
                <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              </div>

              {/*------------ name and add to cart button ------------ */}
              {/* <div className="meal-cont__detail">
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
              </div> */}
            </div>

            <div className="innerMeal">
              <div className="meal-cont">
                <img src={recipe.recipe.image} alt={recipe.recipe.label} />
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
          </div>
        );
      })}
    </MealStyle>
  );
};

export default Meals;
