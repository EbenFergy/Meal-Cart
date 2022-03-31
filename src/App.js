import React from "react";
import Header from "./Components/Header/Header";
import { AppStyle, NoView } from "./AppStyle";
import MealSection from "./Components/Meals/MealSection";
import MealProvider from "./Store/mealProvider";
import RecipeApi from "./api/RecipeApi";
import noView from "./assets/noView.gif";

const App = () => {
  // console.log("Appmeals", meal);
  // console.log("apidata", apiData);
  // console.log("recipeAPI", RecipeApi());

  return (
    <>
      <NoView>
        <div>
          <img src={noView} alt="noView" />
        </div>
        <div>No view for smaller screens yet...</div>
      </NoView>
      <AppStyle>
        <MealProvider>
          <Header />
          <MealSection apiData={RecipeApi()} />
        </MealProvider>
      </AppStyle>
    </>
  );
};

export default App;
