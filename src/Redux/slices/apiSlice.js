import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://foodapp-1dcca-default-rtdb.firebaseio.com",
  }),
  endpoints: (builder) => ({
    getCartList: builder.query({ query: () => "/cartList.json" }),
  }),
});

export const { useGetCartListQuery } = apiSlice;
