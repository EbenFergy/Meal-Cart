import React, { useEffect, useReducer } from "react";
import Header from "./Header/Header";
import AppStyle from "./AppStyle";
import Meals from "./Meals/Meals";
import Axios from "axios";
// import CountryNames from "./Meals/Countries";

const CountryNames = [
  {
    country: "American",
  },
  {
    country: "Asian",
  },
  {
    country: " British",
  },
  {
    country: "Caribbean",
  },
  {
    country: "Chinese",
  },
  {
    country: "French",
  },
  {
    country: "Indian",
  },
  {
    country: "Japanese",
  },
  {
    country: "Mexican",
  },
];

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

  useEffect(() => {
    let foodPerCountry = [];
    CountryNames.map((object) => {
      // <h1>{object.country}</h1>;
      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=recipe&app_id=e2d17e16&app_key=b0ef2f6409d600438b0d9d5f2b6aeada&diet=balanced&cuisineType=${object.country}&cuisineType=Central%20Europe&cuisineType=Eastern%20Europe&dishType=Biscuits%20and%20cookies&dishType=Cereals&dishType=Condiments%20and%20sauces&dishType=Desserts&dishType=Main%20course&dishType=Pancake&dishType=Salad&dishType=Sandwiches&dishType=Soup&dishType=Sweets`;
      const getData = async () => {
        const res = await Axios.get(url);
        let countryObj = {
          countryName: object.country,
          countryRecipes: res.data.hits,
        };

        foodPerCountry.push(countryObj);
      };
      getData();
      return getData;
    });

    dispatch({
      type: "API_DATA",
      value: foodPerCountry,
      key: "apiData",
    });
  }, []);

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
