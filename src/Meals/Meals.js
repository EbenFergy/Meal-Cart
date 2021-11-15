import React from "react";
import MealStyle from "./MealStyle";
import Button from "../Re-usables/Button";
import InputStyle from "../Re-usables/InputStyle";
import CountryNames from "./Countries";

const Meals = ({ apiData, foodCountry, querySearch }) => {
  return (
    <>
      {CountryNames.map((countries) => {
        return [
          <h1>{countries}</h1>,

          <MealStyle>
            {apiData.map(({ recipe }) => {
              return (
                <div key={recipe.label} className="mainMeal">
                  <div className="meal-cont">
                    <img src={recipe.image} alt={recipe.label} />
                  </div>

                  <div className="innerMeal">
                    <div className="meal-cont">
                      <img src={recipe.image} alt={recipe.label} />
                    </div>
                    <div className="meal-cont__detail">
                      <div className="meal-name">
                        <p> Spaghetti</p> <span>$5.00</span>
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
          </MealStyle>,
        ];
      })}
    </>
  );
};

export default Meals;
