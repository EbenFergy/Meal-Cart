import React, { useState } from "react";
import MealStyle from "./MealStyle";
import MealCard from "./MealCard";
import MealWrapperStyle from "./MealWrapperStyle";
import Filter from "../Filter/Filter";

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

  // const filtered = (country) => {
  //   return apiData.filter(({ recipe }) => recipe.cuisineType[0] === country);
  // };
  //   console.log("filterfnctn", filtered(CountryNames[2]));
  return (
    // <MealWrapperStyle>
    //   {CountryNames.map((eachCountry) => {
    //     return (
    //       filtered(eachCountry).length > 0 && (
    //         <div key={eachCountry}>
    //           <div className="countryNames">{eachCountry}</div>
    //           <MealStyle>
    //             {filtered(eachCountry).map(({ recipe }) => {
    //               return (
    //                 <MealCard
    //                   key={recipe.uri}
    //                   calories={recipe.calories}
    //                   image={recipe.image}
    //                   label={recipe.label}
    //                   id={recipe.uri}
    //                 />
    //               );
    //             })}
    //           </MealStyle>
    //         </div>
    //       )
    //     );
    //   })}
    // </MealWrapperStyle>

    <MealWrapperStyle>
      <div className="filterCont">
        <Filter
          CountryNames={CountryNames}
          filter={filter}
          controlFilter={controlFilter}
        />
      </div>

      <MealStyle>
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
            <div>no meal yet...</div>
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
