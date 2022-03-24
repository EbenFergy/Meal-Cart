import React, { useState } from "react";
import mealContext from "./meal-Context";
import _ from "lodash";

const MealProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  const addToCartList = (mealDetails) => {
    console.log("before mealDetailsQuantity", typeof mealDetails.quantity);
    //Check if there's a similar entry in the cartList
    const similarItemHandler = cartList.find((items) => {
      return mealDetails.id === items.id;
    });

    //Check if the similarItemHandler has an entry by checking it's length with loadash
    const similarItemHandlerLength = _.size(similarItemHandler);

    /* authentication if there exists a similar item in the cartList,
     if there's none, update the List else, update the quantity with the current one. */
    if (similarItemHandlerLength === 0) {
      setCartList((prevCartList) => {
        return [mealDetails, ...prevCartList];
      });
    } else if (similarItemHandlerLength > 0) {
      console.log("similarItemHandler", typeof similarItemHandler.quantity);
      console.log("mealDetailsQuantity", typeof mealDetails.quantity);
      similarItemHandler.quantity += mealDetails.quantity;
    }

    console.log("after mealDetailsQuantity", typeof mealDetails.quantity);
  };

  const mealContextValues = {
    addToCartList: addToCartList,
    cartList: cartList,
  };

  return (
    <mealContext.Provider value={mealContextValues}>
      {props.children}
    </mealContext.Provider>
  );
};

export default MealProvider;
