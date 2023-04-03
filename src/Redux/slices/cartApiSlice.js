import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://foodapp-1dcca-default-rtdb.firebaseio.com",
  }),
  tagTypes: ["LIST"],
  endpoints: (builder) => ({
    getCartList: builder.query({
      query: () => "/cartList.json",
      transformResponse: (res) => Object.values(res),
      providesTags: ["LIST"],
    }),
    addToCartList: builder.mutation({
      query: (cartList) => ({
        url: `/cartList.json/`,
        method: "POST",
        body: cartList,
      }),
      invalidatesTags: ["LIST"],
    }),
    deleteFromCartList: builder.mutation({
      query: (item) => ({
        url: `cartList.json`,
        method: "DELETE",
        body: item,
      }),
      invalidatesTags: ["LIST"],
    }),
  }),
});

export const { useGetCartListQuery, useAddToCartListMutation } = cartApiSlice;
