import React from "react";
import Header from "./Header/Header";
import AppStyle from "./AppStyle";
import MealSection from "./Meals/MealSection";
import MealProvider from "./Store/mealProvider";
import RecipeApi from "./api/RecipeApi";

const App = () => {
  // console.log("Appmeals", meal);
  // console.log("apidata", apiData);
  // console.log("recipeAPI", RecipeApi());

  return (
    <AppStyle>
      <MealProvider>
        <Header />
        <MealSection apiData={RecipeApi()} />
      </MealProvider>
    </AppStyle>
  );
};

export default App;
