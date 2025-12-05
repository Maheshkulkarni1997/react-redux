import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';
import  filteredProductreducer from '../features/products/filteredProductsSlice';
//Whatever you put in configureStore({ reducer: {...} }) becomes part of that state.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    cart: cartReducer,
    filteredProducts:filteredProductreducer,
   
    // state = {
    //   cart: {
    //     items: []  // ← coming from your cartSlice initialState
    //   }
    // }
    auth: authReducer,
  },
});
