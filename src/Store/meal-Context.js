import { createContext } from "react";

const mealContext = createContext({
    addToCartList:null,
    cartList: null,
    addQuantity:null,
    reduceQuantity:null,

});

export default mealContext;
