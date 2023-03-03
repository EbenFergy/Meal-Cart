import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useEffect } from "react";

// create cartList initialState
const cartInitialState = { cartList: [] };

const cartList = createSlice({
  name: "CART_LIST",
  initialState: cartInitialState,
  reducers: {
    addToCartList(state, action) {
      let findItem = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (!findItem) {
        state.cartList.push(action.payload);
      } else {
        findItem.quantity += 1;
      }
    },

    removeFromCartList(state, action) {
      const id = action.payload;
      state.cartList = state.cartList.filter((item) => item.id !== id);
    },

    addQuantity(state, action) {
      const id = action.payload;
      //   const item = state.cartList.find((items) => {
      //     return id === items.id;
      //   });
      //   item.quantity += 1;
      console.log("cartList in store...", state);
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
