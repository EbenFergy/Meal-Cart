import { createSlice, configureStore } from "@reduxjs/toolkit";

// create cartList initialState
const cartInitialState = { cartList: [] };
const cartList = createSlice({
  name: "CART_LIST",
  initialState: cartInitialState,
  reducers: {
    addToCartList(state, action) {
      state.cartList.push(action.payload);
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
