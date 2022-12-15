import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./ProductsSlice";
let Store = configureStore({
  reducer: {
    Weather: ProductsSlice,
  },
});
export default Store;
