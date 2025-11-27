import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, removeFromCart,clearCart } from "./cartSlice";
// import { removeFromCart, decreaseQuantity, addToCart, clearCart } from "../features/cart/cartSlice";

export default function Cart() {
  // state → entire store
// state.cart → the part managed by cartSlice
// state.cart.items → the actual array from your slice
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>
      {items.map(item => (
        <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span>{item.title} (${item.price}) x {item.quantity}</span>
          <div>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}
