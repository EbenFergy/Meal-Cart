import React, { useEffect, useReducer } from "react";
import Header from "./Header/Header";
import AppStyle from "./AppStyle";
import Meals from "./Meals/Meals";
import Axios from "axios";
import CountryNames from "./Meals/Countries";

const initialState = {
  apiData: [],
  querySearch: "",
  foodCountry: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "API_DATA":
      return {
        ...state,
        [action.key]: action.value,
      };

    case "QUERY_SEARCH":
      return {
        ...state,
        [action.key]: action.value,
      };

    case "FOOD_COUNTRY":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const querySearchChange = (querySearchName) => {
    dispatch({
      type: "QUERY_SEARCH",
      value: querySearchName,
      key: "querySearch",
    });
  };

  const foodCountryChange = (foodCountryName) => {
    dispatch({
      type: "FOOD_COUNTRY",
      value: foodCountryName,
      key: "foodCountry",
    });
  };

  // const url =
  //   "https://api.edamam.com/api/recipes/v2?type=public&q=chicken%2C%20rice&app_id=e2d17e16&app_key=21e78aa13aca110a1c140b69f2d2bdd4&diet=balanced&cuisineType=American&cuisineType=Asian&cuisineType=British&cuisineType=Caribbean&cuisineType=Central%20Europe&cuisineType=Chinese&cuisineType=Eastern%20Europe&cuisineType=French&cuisineType=Indian&cuisineType=Italian&cuisineType=Japanese&cuisineType=Kosher&cuisineType=Mediterranean&cuisineType=Mexican&cuisineType=Middle%20Eastern&cuisineType=Nordic&cuisineType=South%20American&cuisineType=South%20East%20Asian&mealType=Breakfast&mealType=Dinner&mealType=Lunch&mealType=Snack&mealType=Teatime&random=true"
  //   `https://api.edamam.com/api/recipes/v2?type=public&q=${state.querySearch}&app_id=e2d17e16&app_key=21e78aa13aca110a1c140b69f2d2bdd4&cuisineType=American&dishType=Biscuits%20and%20cookies&dishType=Cereals&dishType=Condiments%20and%20sauces&dishType=Desserts&dishType=Main%20course&dishType=Pancake&dishType=Salad&dishType=Sandwiches&dishType=Soup&dishType=Sweets`;
  //   `https://api.edamam.com/api/recipes/v2?type=public&q=recipe&app_id=e2d17e16&app_key=21e78aa13aca110a1c140b69f2d2bdd4&diet=balanced&cuisineType=${state.foodCountry}&cuisineType=Central%20Europe&cuisineType=Eastern%20Europe&dishType=Biscuits%20and%20cookies&dishType=Cereals&dishType=Condiments%20and%20sauces&dishType=Desserts&dishType=Main%20course&dishType=Pancake&dishType=Salad&dishType=Sandwiches&dishType=Soup&dishType=Sweets`;

  useEffect(() => {
    let foodPerCountry = [];
    CountryNames.map((object) => {
      // <h1>{object.country}</h1>;
      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=recipe&app_id=e2d17e16&app_key=21e78aa13aca110a1c140b69f2d2bdd4&diet=balanced&cuisineType=${object.country}&cuisineType=Central%20Europe&cuisineType=Eastern%20Europe&dishType=Biscuits%20and%20cookies&dishType=Cereals&dishType=Condiments%20and%20sauces&dishType=Desserts&dishType=Main%20course&dishType=Pancake&dishType=Salad&dishType=Sandwiches&dishType=Soup&dishType=Sweets`;
      Axios.get(url).then((res) => {
        let countryObj = {
          countryName: object.country.trim(),
          countryRecipes: res.data.hits,
        };

        foodPerCountry.push(countryObj);
      });
      return object;
    });

    dispatch({
      type: "API_DATA",
      value: foodPerCountry,
      key: "apiData",
    });
  }, []);
  console.log("apidata", state.apiData);

  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await Axios.get(url);
  //     dispatch({
  //       type: "API_DATA",
  //       value: result.data.hits,
  //       key: "apiData",
  //     });
  //     return result;
  //   };
  //   getData();
  // }, [url]);

  return (
    <AppStyle>
      <Header />
      <Meals
        apiData={state.apiData}
        foodCountry={foodCountryChange}
        querySearch={querySearchChange}
      />
    </AppStyle>
  );
};

export default App;
