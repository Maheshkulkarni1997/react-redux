import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
 //This means the cart starts with an empty array.
    items: [], // { id, title, price, quantity }
  },
  reducers: {
    addToCart: (state, action) => {
      
      const product = action.payload; //Whatever you pass to addToCart(item) becomes:
      
      const existing = state.items.find(item => item.id === product.id);//already present inside cart.items array
      if (existing) {
        existing.quantity += 1; // increase quantity if product exists
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// Flow: Dispatch → Reducer → Store → UI
// [1] User clicks "+" button
//         │
//         ▼
// [2] React runs onClick → dispatch(addToCart(product))
//         │
//         ▼
// [3] Redux receives action
//         │
//         ▼
// Action object:
// {
//   type: "cart/addToCart",
//   payload: { id: 1, title: "Shoes", price: 50 }
// }
//         │
//         ▼
// [4] cartSlice reducer runs
//   ├─ Checks if product exists in state.items
//   ├─ If exists → increase quantity
//   └─ If not → push product into state.items
//         │
//         ▼
// [5] Redux store updates state
// state = {
//   cart: {
//     items: [
//       { id: 1, title: "Shoes", price: 50, quantity: 2 } 
//     ]
//   }
// }
//         │
//         ▼
// [6] useSelector detects state change
//         │
//         ▼
// [7] React re-renders Cart component
//         │
//         ▼
// [8] UI now shows updated cart
// Shoes x 2

// Explanation of each step

// User clicks button → triggers React onClick.

// dispatch(addToCart(product)) → creates an action object.

// Redux receives action → finds which reducer handles it.

// Reducer runs → updates state.items (your cart array).

// Store updates → Redux saves the new state.

// useSelector detects change → tells React component to re-render.

// React re-renders → the component now reads the new state.

// UI updates → shows new quantities or items in cart.