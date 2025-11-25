import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
