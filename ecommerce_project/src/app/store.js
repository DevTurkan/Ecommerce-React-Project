import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/userSlice/userSlice";
import category from "../redux/category/category";
import productSlice from "../redux/products/productSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    category: category,
    product: productSlice,
  },
});

export default store;
