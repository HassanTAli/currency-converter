import { configureStore } from "@reduxjs/toolkit";
import CurrencySlice from "./Currency/CurrencySlice";
import { currencyApi } from "../services/currencyApi";

export const store = configureStore({
  reducer: {
    currency: CurrencySlice,
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware),
});
