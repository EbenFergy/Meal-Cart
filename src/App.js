import React, { useEffect } from "react";
import Header from "./Header/Header";
import AppStyle from "./AppStyle";
import Meals from "./Meals/Meals";
import Axios from "axios";

function App() {
  const url =
    "https://api.edamam.com/api/recipes/v2?type=public&q=chicken%2C%20rice&app_id=e2d17e16&app_key=21e78aa13aca110a1c140b69f2d2bdd4&diet=balanced&cuisineType=American&cuisineType=Asian&cuisineType=British&cuisineType=Caribbean&cuisineType=Central%20Europe&cuisineType=Chinese&cuisineType=Eastern%20Europe&cuisineType=French&cuisineType=Indian&cuisineType=Italian&cuisineType=Japanese&cuisineType=Kosher&cuisineType=Mediterranean&cuisineType=Mexican&cuisineType=Middle%20Eastern&cuisineType=Nordic&cuisineType=South%20American&cuisineType=South%20East%20Asian&mealType=Breakfast&mealType=Dinner&mealType=Lunch&mealType=Snack&mealType=Teatime&random=true";

  useEffect(() => {
    return (
    async () => {
      const result = await Axios.get(url);
      setHits(result.data.hits);
    })
  }, []);

  return (
    <AppStyle>
      <Header />
      {/* <div className='check'></div> */}
      <Meals />
    </AppStyle>
  );
}

export default App;
