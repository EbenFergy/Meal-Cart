import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../slices/cart_slice";
import { authReducer } from "../slices/auth_slice";
import { UIReducer } from "../slices/UI_slice";

const store = configureStore({
  reducer: {
    cartList: cartReducer,
    authStatus: authReducer,
    UIStatus: UIReducer,
  },
});

export default store;
