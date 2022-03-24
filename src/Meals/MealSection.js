import React from "react";
import MealStyle from "./MealStyle";
import MealCard from "./MealCard";
import MealWrapperStyle from "./MealWrapperStyle";

const MealSection = ({ apiData }) => {
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
  const filtered = (country) => {
    return apiData.filter(({ recipe }) => recipe.cuisineType[0] === country);
  };
  //   console.log("filterfnctn", filtered(CountryNames[2]));
  return (
    <MealWrapperStyle>
      {CountryNames.map((eachCountry) => {
        return (
          filtered(eachCountry).length > 0 && (
            <>
              <div className="countryNames">{eachCountry}</div>
              <MealStyle>
                {filtered(eachCountry).map(({ recipe }) => {
                  return (
                    <MealCard
                      calories={recipe.calories}
                      image={recipe.image}
                      label={recipe.label}
                      id={recipe.uri}
                    />
                  );
                })}
              </MealStyle>
            </>
          )
        );
      })}

      
    </MealWrapperStyle>
  );
};

export default MealSection;
