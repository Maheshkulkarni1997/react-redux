import React from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Checkout</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
}
