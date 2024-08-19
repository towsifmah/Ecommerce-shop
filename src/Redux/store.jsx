import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import "/src/main.jsx"
const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

export default store;

