import React from 'react';



const MealSection = ()=>{
    console.log("apiDataMeals", apiData);
    const filtered = apiData.filter(
      ({ recipe }) => recipe.cuisineType[0] === "american"
    );
    console.log("filter", filtered);
    return (
      <>
        <MealStyle>
          {filtered.map(({ recipe }) => {

    return(


    )
}

export default MealSection;