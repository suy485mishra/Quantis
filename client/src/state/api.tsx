// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // import {
// //   GetKpisResponse,
// //   // GetProductsResponse,
// //   // GetTransactionsResponse,
// // } from "./types";
// import { GetKpisResponse } from "./types";

// export const api = createApi({
//     //create api allows us to grab the data from the backend and for that below boilerplate code is required
    
//     //
//   baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
//   //main is just a name
//   reducerPath: "main",
//   //used to keep info
//   tagTypes: ["Kpis"],
//   //  "Products", "Transactions"
//   //here we actually do api calls
//   endpoints: (build) => ({
//     //this partucular api will grab 'key performance indicators'
//     // <Array<GetKpisResponse>,void>
//     getKpis: build.query
//     ({
//       query: () => "kpi/kpis/",
//       providesTags: ["Kpis"],
//     }),
//     // getProducts: build.query<Array<GetProductsResponse>, void>({
//     //   query: () => "product/products/",
//     //   providesTags: ["Products"],
//     // }),
//     // getTransactions: build.query<Array<GetTransactionsResponse>, void>({
//     //   query: () => "transaction/transactions/",
//     //   providesTags: ["Transactions"],
//     // }),
//   }),
// });

// export const {useGetKpisQuery} =api;
//     //  useGetProductsQuery, useGetTransactionsQuery 
    

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  //tagtypes is saving info that we get from getKpis,getproducts etc apis
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
