import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../slices/cart_slice";
import { authReducer } from "../slices/auth_slice";

const store = configureStore({
  reducer: {
    cartList: cartReducer,
    authStatus: authReducer,
  },
});

export default store;
