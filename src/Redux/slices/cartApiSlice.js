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
      transformResponse: (res) => {
        if (res) return Object.values(res);
        else {
          return [];
        }
      },
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

    addQuantity: builder.mutation({
      query: (list) => ({
        url: "/cartList.json",
        method: "PUT",
        body: list,
      }),
      invalidatesTags: ["LIST"],
    }),
    deleteFromCartList: builder.mutation({
      query: (newList) => ({
        url: `/cartList.json/`,
        method: "PUT",
        body: newList,
      }),
      invalidatesTags: ["LIST"],
    }),
  }),
});

export const {
  useGetCartListQuery,
  useAddToCartListMutation,
  useDeleteFromCartListMutation,
  useAddQuantityMutation,
} = cartApiSlice;
