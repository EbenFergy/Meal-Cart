import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import AppStyle from "./AppStyle";
import MealSection from "./Meals/MealSection";
import Axios from "axios";
import mealContext from "./Contexts/mealContext";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [cartListLength, setCartListLength] = useState(0);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=food&app_id=306b93f3&app_key=e14838727cbc8f3b6414302c7fe1bfaa&cuisineType=American&cuisineType=Asian&cuisineType=British&cuisineType=Caribbean&cuisineType=Central%20Europe&cuisineType=Chinese&cuisineType=Eastern%20Europe&cuisineType=French&cuisineType=Indian&cuisineType=Italian&cuisineType=Japanese&cuisineType=Kosher&cuisineType=Mediterranean&cuisineType=Mexican&cuisineType=Middle%20Eastern&cuisineType=Nordic&cuisineType=South%20American&cuisineType=South%20East%20Asian&mealType=Breakfast&mealType=Dinner&mealType=Lunch&mealType=Snack&mealType=Teatime&dishType=Biscuits%20and%20cookies&dishType=Bread&dishType=Cereals&dishType=Condiments%20and%20sauces&dishType=Desserts&dishType=Drinks&dishType=Main%20course&dishType=Pancake&dishType=Preps&dishType=Preserve&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup&dishType=Starter&dishType=Sweets&random=false`;
  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get(url);
      // console.log("resData", res.data.hits);
      setApiData(res.data.hits);
    };

    getData();
  }, [url]);

  // console.log("Appmeals", meal);
  // console.log("apidata", apiData);

  return (
    <AppStyle>
      <mealContext.Provider
        value={{
          setCartList: setCartList,
          cartList: cartList,
          setCartListLength: setCartListLength,
          cartListLength: cartListLength,
        }}
      >
        <Header />
        <MealSection apiData={apiData} />
      </mealContext.Provider>
    </AppStyle>
  );
};

export default App;
