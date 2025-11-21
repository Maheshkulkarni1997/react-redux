import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
