import React from "react";
import Header from "./Components/Header/Header";
import AppStyle from "./AppStyle";
import MealSection from "./Components/Meals/MealSection";
import MealProvider from "./Store/mealProvider";
import RecipeApi from "./api/RecipeApi";

const App = () => {
  // console.log("Appmeals", meal);
  // console.log("apidata", apiData);
  // console.log("recipeAPI", RecipeApi());

  return (
    <AppStyle>
      <div className="noView">No view for smaller screens yet...</div>
      <MealProvider>
        <Header />
        <MealSection apiData={RecipeApi()} />
      </MealProvider>
    </AppStyle>
  );
};

export default App;
