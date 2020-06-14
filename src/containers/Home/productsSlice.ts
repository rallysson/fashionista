import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "../../api";
import { AppThunk } from "../../store";

export interface Size {
  available: boolean;
  size: string;
  sku: string;
}

export interface Product {
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: Size[];
}

export interface InitialState {
  loading: boolean;
  data: Product[];
}

const initialState: InitialState = {
  loading: false,
  data: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setLoading } = productsSlice.actions;

export const fetchProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const catalog = await getProducts();

    dispatch(setProducts(catalog));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(setLoading(false));
  }
};

export default productsSlice.reducer;
