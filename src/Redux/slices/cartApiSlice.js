import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://foodapp-1dcca-default-rtdb.firebaseio.com",
  }),
  endpoints: (builder) => ({
    getCartList: builder.query({ query: () => "/cartList.json" }),
    addToCartList: builder.mutation({
      query: (cartList) => ({
        url: "/cartList.json",
        method: "PUT",
        body: cartList,
      }),
    }),
  }),
});

export const { useGetCartListQuery, useAddToCartListMutation } = cartApiSlice;
