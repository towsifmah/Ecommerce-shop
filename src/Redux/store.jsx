import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.jsx";
import ProductSlice from "./ProductSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: ProductSlice,
  },
});

export default store;
