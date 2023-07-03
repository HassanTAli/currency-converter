import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
  currencyOne: 0,
  currencyTwo: 0,
  amount: 0,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    convertCurrency: (state) => {
      state.result = (state.currencyTwo / state.currencyOne) * state.amount;
    },
    setCurrencyOne: (state, { payload }) => {
      state.currencyOne = payload;
    },
    setCurrencyTwo: (state, { payload }) => {
      state.currencyTwo = payload;
    },
    setCurrencyAmount: (state, { payload }) => {
      state.amount = payload;
    },
  },
});

export const {
  convertCurrency,
  setCurrencyOne,
  setCurrencyTwo,
  setCurrencyAmount,
} = currencySlice.actions;

export const currencyState = (state) => state.currency.result;

export default currencySlice.reducer;
