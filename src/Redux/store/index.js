import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../slices/cart_slice";
import { authReducer } from "../slices/auth_slice";
import { UIReducer } from "../slices/UI_slice";
import { foodApiSlice } from "../slices/foodApiSlice";
import { cartApiSlice } from "../slices/cartApiSlice";

const store = configureStore({
  reducer: {
    cartList: cartReducer,
    authStatus: authReducer,
    UIStatus: UIReducer,
    [foodApiSlice.reducerPath]: foodApiSlice.reducer,
    [cartApiSlice.reducerPath]: cartApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      foodApiSlice.middleware,
      cartApiSlice.middleware
    ),
});

export default store;
