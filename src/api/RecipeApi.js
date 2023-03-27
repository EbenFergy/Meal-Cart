import { useEffect, useState } from "react";
import axios from "axios";

const API_ID = "306b93f3";
const API_KEY = "e14838727cbc8f3b6414302c7fe1bfaa";

const RecipeApi = () => {
  const [apiData, setApiData] = useState([]);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=food&app_id=${API_ID}&app_key=${API_KEY}&cuisineType=American&cuisineType=Asian&cuisineType=British&cuisineType=Caribbean&cuisineType=Central%20Europe&cuisineType=Chinese&cuisineType=Eastern%20Europe&cuisineType=French&cuisineType=Indian&cuisineType=Italian&cuisineType=Japanese&cuisineType=Kosher&cuisineType=Mediterranean&cuisineType=Mexican&cuisineType=Middle%20Eastern&cuisineType=Nordic&cuisineType=South%20American&cuisineType=South%20East%20Asian&mealType=Breakfast&mealType=Dinner&mealType=Lunch&mealType=Snack&mealType=Teatime&dishType=Biscuits%20and%20cookies&dishType=Bread&dishType=Cereals&dishType=Condiments%20and%20sauces&dishType=Desserts&dishType=Drinks&dishType=Main%20course&dishType=Pancake&dishType=Preps&dishType=Preserve&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup&dishType=Starter&dishType=Sweets&random=true`;
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      // console.log("resData", res.data.hits);
      setApiData(res.data.hits);
    };

    getData();
  }, [url]);

  return apiData;
};

export default RecipeApi;
