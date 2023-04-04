import React, { useState } from "react";
import MealStyle from "./MealStyle";
import MealCard from "./MealCard";
import MealWrapperStyle from "./MealWrapperStyle";
import Filter from "../Filter/Filter";
import noMeal from "../../assets/noMeal.gif";

const MealSection = ({ apiData }) => {
  const [filterController, setFilterController] = useState(false);
  const [filterParams, setFilterParams] = useState([]);

  const CountryNames = [
    "african",
    "american",
    "asian",
    "british",
    "caribbean",
    "chinese",
    "french",
    "indian",
    "italian",
    "japanese",
    "mediterranean",
    "mexican",
  ];

  const controlFilter = (bool) => {
    setFilterController(bool);
  };

  const filter = (country) => {
    let filtered = apiData.filter(
      ({ recipe }) => recipe.cuisineType[0] === country
    );
    setFilterParams(filtered);
  };

  return (
    <MealWrapperStyle>
      <div className="filterCont">
        <Filter
          CountryNames={CountryNames}
          filter={filter}
          controlFilter={controlFilter}
        />
      </div>

      <MealStyle
        filterParamsLength={filterParams.length}
        filterController={filterController}
      >
        {filterController ? (
          filterParams.length > 0 ? (
            filterParams.map(({ recipe }) => {
              return (
                <MealCard
                  key={recipe.uri}
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                  id={recipe.uri}
                />
              );
            })
          ) : (
            <div className="noMeal">
              <img src={noMeal} alt="no meal" />
              <div> no meal found try another option...</div>
            </div>
          )
        ) : (
          apiData.map(({ recipe }) => {
            return (
              <MealCard
                key={recipe.uri}
                calories={recipe.calories}
                image={recipe.image}
                label={recipe.label}
                id={recipe.uri}
              />
            );
          })
        )}
      </MealStyle>
    </MealWrapperStyle>
  );
};

export default MealSection;
