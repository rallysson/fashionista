import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { reducers as productsReducers } from "./containers/Home/";

export const store = configureStore({
  reducer: {
    products: productsReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
