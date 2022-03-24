import React, {useState} from "react";
import mealContext from "./meal-Context";

const MealProvider = (props) => {
  const [cartList, setCartList] = useState([]);
  const [cartListLength, setCartListLength] = useState(0);

  const mealContextValues = {
    setCartList: setCartList,
    cartList: cartList,
    setCartListLength: setCartListLength,
    cartListLength: cartListLength,
  };

  return (
    <mealContext.Provider value={mealContextValues}>
      {props.children}
    </mealContext.Provider>
  );
};

export default MealProvider;
