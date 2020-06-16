import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../Home/productsSlice";

export interface CartProduct extends Product {
  quantity: number;
  size: string;
}

const initialState: CartProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product & { size: string }>) => {
      state.push({ ...action.payload, quantity: 1 });
    },
    incrementItem: (
      state,
      action: PayloadAction<{ codeColor: string; size: string }>
    ) => {
      const itemIndex = state.findIndex(
        (item: CartProduct) =>
          item.code_color === action.payload.codeColor &&
          item.size === action.payload.size
      );

      state[itemIndex].quantity = state[itemIndex].quantity + 1;
    },
    decrementItem: (
      state,
      action: PayloadAction<{ codeColor: string; size: string }>
    ) => {
      const itemIndex = state.findIndex(
        (item: CartProduct) =>
          item.code_color === action.payload.codeColor &&
          item.size === action.payload.size
      );

      if (state[itemIndex].quantity > 1) {
        state[itemIndex].quantity = state[itemIndex].quantity - 1;
      }
    },
    removeEntireItem: (
      state,
      action: PayloadAction<{ codeColor: string; size: string }>
    ) => {
      const itemIndex = state.findIndex(
        (item: CartProduct) =>
          item.code_color === action.payload.codeColor &&
          item.size === action.payload.size
      );

      state.splice(itemIndex, 1);
    },
  },
});

export const {
  addItem,
  incrementItem,
  decrementItem,
  removeEntireItem,
} = cartSlice.actions;

export default cartSlice.reducer;
