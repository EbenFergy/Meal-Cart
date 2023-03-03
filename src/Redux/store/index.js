import { createSlice, configureStore } from "@reduxjs/toolkit";

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
        findItem.quantity += action.payload.quantity;
      }
    },

    removeFromCartList(state, action) {
      const id = action.payload;
      state.cartList = state.cartList.filter((item) => item.id !== id);
    },

    addQuantity(state, action) {
      let findItem = state.cartList.find((item) => item.id === action.payload);
      findItem.quantity += 1;
    },

    reduceQuantity(state, action) {
      let findItem = state.cartList.find((item) => item.id === action.payload);
      findItem.quantity -= 1;
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
