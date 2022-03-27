import { createContext } from "react";

const mealContext = createContext({
  cartList: null,
  addToCartList: null,
  removeFromCartList: null,
  addQuantity: null,
  reduceQuantity: null,
  totalPrice: null,
  addCartPrices: null,
});

export default mealContext;
