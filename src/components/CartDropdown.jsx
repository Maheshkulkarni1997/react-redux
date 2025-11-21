import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from "../features/cart/cartSlice";

export default function CartDropdown() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div 
      style={{
        position: "absolute",
        top: 40,
        right: 0,
        width: 300,
        maxHeight: 400,
        overflowY: "auto",
        background: "white",
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }}
    >
      {items.length === 0 && <p>Your cart is empty.</p>}

      {items.map(item => (
        <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span>{item.title} x {item.quantity}</span>
          <div>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>x</button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <>
          <hr />
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
