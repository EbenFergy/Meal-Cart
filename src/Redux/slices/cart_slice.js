import { createSlice } from "@reduxjs/toolkit";

// create cartList initialState
const cartInitialState = { cartList: [], cartLength: 0 };

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
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
    },

    addQuantity(state, action) {
      let findItem = state.cartList.find((item) => item.id === action.payload);
      findItem.quantity += 1;
    },

    reduceQuantity(state, action) {
      let findItem = state.cartList.find((item) => item.id === action.payload);
      findItem.quantity > 1
        ? (findItem.quantity -= 1)
        : (state.cartList = state.cartList.filter(
            (item) => item.id !== action.payload
          ));
    },
  },
});

export const cartListActions = cartList.actions;
export const cartReducer = cartList.reducer;
