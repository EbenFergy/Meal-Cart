import React, { useState } from "react";
import mealContext from "./meal-Context";
import _ from "lodash";

const MealProvider = (props) => {
  const [cartList, setCartList] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0.0);

  // find an item in the cart
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

  // FILTER CARTLIST
  const filterHandler = (id) => {
    return cartList.filter((item) => {
      return item.id !== id;
    });
  };

  // remove an item from the cart list of items
  const removeFromCartList = (id) => {
    setCartList(filterHandler(id));
    // addCartPrices();
  };

  // increase a particular item's quantity
  const addQuantity = (id) => {
    const item = cartListFinder(id);
    item.quantity += 1;
    return item.quantity;
  };

  //  reduce a particular item's quantity
  const reduceQuantity = (id) => {
    const item = cartListFinder(id);
    if (item.quantity > 0) {
      item.quantity -= 1;
    }
    if (item.quantity === 0) {
      removeFromCartList(id);
    }
    return item.quantity;
  };

  // sum up all cart prices
  const addCartPrices = () => {
    let thePrice = cartList.reduce((accumulator, item) => {
      // let correctPrice = 0;

      // if (cartList.length > 0) {
      let correctPrice = item.quantity * item.price;
      // }
      return accumulator + correctPrice;
    }, 0);

    setCartTotalPrice(thePrice.toFixed(2));
  };

  // provider list
  const mealContextValues = {
    cartList: cartList,
    addToCartList: addToCartList,
    removeFromCartList: removeFromCartList,
    addQuantity: addQuantity,
    reduceQuantity: reduceQuantity,
    totalPrice: cartTotalPrice,
    addCartPrices: addCartPrices,
  };

  return (
    <mealContext.Provider value={mealContextValues}>
      {props.children}
    </mealContext.Provider>
  );
};

export default MealProvider;
