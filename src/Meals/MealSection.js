import React from "react";
import MealStyle from "./MealStyle";
import MealCard from "./MealCard";
import MealWrapperStyle from "./MealWrapperStyle";

const MealSection = ({ apiData }) => {
  const CountryNames = [
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
      {filtered(CountryNames[0]).length > 0 && (
        <>
          <div className="countryNames">{CountryNames[0]}</div>
          <MealStyle>
            {filtered(CountryNames[0]).map(({ recipe }) => {
              return (
                <MealCard
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                />
              );
            })}
          </MealStyle>
        </>
      )}

      {filtered(CountryNames[1]).length > 0 && (
        <>
          <div className="countryNames">{CountryNames[1]}</div>
          <MealStyle>
            {filtered(CountryNames[1]).map(({ recipe }) => {
              return (
                <MealCard
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                />
              );
            })}
          </MealStyle>
        </>
      )}

      {filtered(CountryNames[2]).length > 0 && (
        <>
          <div className="countryNames">{CountryNames[2]}</div>
          <MealStyle>
            {filtered(CountryNames[2]).map(({ recipe }) => {
              return (
                <MealCard
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                />
              );
            })}
          </MealStyle>
        </>
      )}

      {filtered(CountryNames[3]).length > 0 && (
        <>
          <div className="countryNames">{CountryNames[3]}</div>
          <MealStyle>
            {filtered(CountryNames[3]).map(({ recipe }) => {
              return (
                <MealCard
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                />
              );
            })}
          </MealStyle>
        </>
      )}

      {filtered(CountryNames[4]).length > 0 && (
        <>
          <div className="countryNames">{CountryNames[4]}</div>
          <MealStyle>
            {filtered(CountryNames[4]).map(({ recipe }) => {
              return (
                <MealCard
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                />
              );
            })}
          </MealStyle>
        </>
      )}

      {filtered(CountryNames[5]).length > 0 && (
        <>
          <div className="countryNames">{CountryNames[5]}</div>
          <MealStyle>
            {filtered(CountryNames[5]).map(({ recipe }) => {
              return (
                <MealCard
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                />
              );
            })}
          </MealStyle>
        </>
      )}

      {filtered(CountryNames[6]).length > 0 && (
        <>
          <div className="countryNames">{CountryNames[6]}</div>
          <MealStyle>
            {filtered(CountryNames[6]).map(({ recipe }) => {
              return (
                <MealCard
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                />
              );
            })}
          </MealStyle>
        </>
      )}

      {filtered(CountryNames[7]).length > 0 && (
        <>
          <div className="countryNames">{CountryNames[7]}</div>
          <MealStyle>
            {filtered(CountryNames[7]).map(({ recipe }) => {
              return (
                <MealCard
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                />
              );
            })}
          </MealStyle>
        </>
      )}

      {filtered(CountryNames[8]).length > 0 && (
        <>
          <div className="countryNames">{CountryNames[8]}</div>
          <MealStyle>
            {filtered(CountryNames[8]).map(({ recipe }) => {
              return (
                <MealCard
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                />
              );
            })}
          </MealStyle>
        </>
      )}

      {filtered(CountryNames[9]).length > 0 && (
        <>
          <div className="countryNames">{CountryNames[9]}</div>
          <MealStyle>
            {filtered(CountryNames[9]).map(({ recipe }) => {
              return (
                <MealCard
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                />
              );
            })}
          </MealStyle>
        </>
      )}

      {filtered(CountryNames[10]).length > 0 && (
        <>
          <div className="countryNames">{CountryNames[10]}</div>
          <MealStyle>
            {filtered(CountryNames[10]).map(({ recipe }) => {
              return (
                <MealCard
                  calories={recipe.calories}
                  image={recipe.image}
                  label={recipe.label}
                />
              );
            })}
          </MealStyle>
        </>
      )}
    </MealWrapperStyle>
  );
};

export default MealSection;
