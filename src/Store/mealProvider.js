import React, { useState } from "react";
import mealContext from "./meal-Context";
import _ from "lodash";

const MealProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  const cartListFinder = (id) => {
    return cartList.find((items) => {
      return id === items.id;
    });
  };

  const addToCartList = (mealDetails) => {
    //Check if there's a similar entry in the cartList
    const similarItemHandler = cartListFinder(mealDetails.id);

    //Check if the similarItemHandler has an entry by checking it's length with loadash
    const similarItemHandlerLength = _.size(similarItemHandler);

    /* authentication if there exists a similar item in the cartList,
     if there's none, update the List else, update the quantity with the current one. */
    if (similarItemHandlerLength === 0) {
      setCartList((prevCartList) => {
        return [mealDetails, ...prevCartList];
      });
    } else if (similarItemHandlerLength > 0) {
      similarItemHandler.quantity += mealDetails.quantity;
    }
  };

  const addQuantity = (id) => {
    const item = cartListFinder(id);
    item.quantity += 1;
    return item.quantity;
  };

  const reduceQuantity = (id) => {
    const item = cartListFinder(id);
    item.quantity -= 1;
    return item.quantity;
  };

  const mealContextValues = {
    addToCartList: addToCartList,
    cartList: cartList,
    addQuantity: addQuantity,
    reduceQuantity: reduceQuantity,
  };

  return (
    <mealContext.Provider value={mealContextValues}>
      {props.children}
    </mealContext.Provider>
  );
};

export default MealProvider;
