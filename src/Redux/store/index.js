import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useEffect } from "react";

// find and return an item in a list using it's id
const cartListFinder = (list, id) => {
  list.find((items) => {
    return id === items.id;
  });
};

// create cartList initialState
const cartInitialState = { cartList: [] };

const cartList = createSlice({
  name: "CART_LIST",
  initialState: cartInitialState,
  reducers: {
    addToCartList(state, action) {
      state.cartList.push(action.payload);
    },

    removeFromCartList(state, action) {
      const id = action.payload;
      state.cartList = state.cartList.filter((item) => item.id !== id);
    },

    addQuantity(state, action) {
      const id = action.payload;
      const item = cartListFinder(state.cartList, id);
      item.quantity += 1;
    },

    reduceQuantity(state, action) {
      const id = action.payload;
      const item = cartListFinder(state.cartList, id);
      item.quantity -= 1;
    },
  },
});

export const cartListActions = cartList.actions;

const store = configureStore({
  reducer: {
    cartList: cartList.reducer,
  },
});

export default store;
