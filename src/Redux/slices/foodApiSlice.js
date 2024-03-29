import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const API_ID = process.env.REACT_APP_FOOD_API_ID;
const API_KEY = process.env.REACT_APP_FOOD_API_KEY;

export const foodApiSlice = createApi({
  reducerPath: "foodapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.edamam.com" }),
  endpoints: (builder) => ({
    getFoods: builder.query({
      query: () =>
        `/api/recipes/v2?type=public&q=food&app_id=${API_ID}&app_key=${API_KEY}&cuisineType=American&cuisineType=Asian&cuisineType=British&cuisineType=Caribbean&cuisineType=Central%20Europe&cuisineType=Chinese&cuisineType=Eastern%20Europe&cuisineType=French&cuisineType=Indian&cuisineType=Italian&cuisineType=Japanese&cuisineType=Kosher&cuisineType=Mediterranean&cuisineType=Mexican&cuisineType=Middle%20Eastern&cuisineType=Nordic&cuisineType=South%20American&cuisineType=South%20East%20Asian&mealType=Breakfast&mealType=Dinner&mealType=Lunch&mealType=Snack&mealType=Teatime&dishType=Biscuits%20and%20cookies&dishType=Bread&dishType=Cereals&dishType=Condiments%20and%20sauces&dishType=Desserts&dishType=Drinks&dishType=Main%20course&dishType=Pancake&dishType=Preps&dishType=Preserve&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup&dishType=Starter&dishType=Sweets&random=true`,
    }),
  }),
});

export const { useGetFoodsQuery } = foodApiSlice;
