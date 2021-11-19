import React from "react";
import MealStyle from "./MealStyle";
import Button from "../Re-usables/Button";
import InputStyle from "../Re-usables/InputStyle";

const Meals = ({ apiData }) => {
  
          return (
            <div key={recipe.calories} className="mainMeal">
              <div className="meal-cont">
                <img src={recipe.image} alt={recipe.label} />
              </div>

              <div className="innerMeal">
                <div className="meal-cont">
                  <img src={recipe.image} alt={recipe.label} />
                </div>
                <div className="meal-cont__detail">
                  <div className="meal-name">
                    <p> {recipe.label}</p>
                  </div>
                  <div className="meal-form">
                    <div className="meal-price">$5.00</div>
                    <form>
                      <div className="input-cont">
                        <InputStyle
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
            </div>
          );
        })}
      </MealStyle>
    </>
  );
};

export default Meals;
