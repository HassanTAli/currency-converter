import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://data.fixer.io/api/" }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "latest?access_key=a97ea8b7774051d08c5b2129fb73b614",
    }),
  }),
});

export const { useGetDataQuery } = currencyApi;
