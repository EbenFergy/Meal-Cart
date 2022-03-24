import { createContext } from "react";

const mealContext = createContext({
    addToCartList:null,
    cartList: null
});

export default mealContext;
