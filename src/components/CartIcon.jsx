import { useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa"; // cart icon
import CartDropdown from "./CartDropdown";

export default function CartIcon() {
  const items = useSelector(state => state.cart.items);
  const [open, setOpen] = useState(false);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
      <div 
        onClick={() => setOpen(!open)} 
        style={{ cursor: "pointer", position: "relative" }}
      >
        <FaShoppingCart size={30} />
        {itemCount > 0 && (
          <span 
            style={{
              position: "absolute",
              top: -10,
              right: -10,
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: 12
            }}
          >
            {itemCount}
          </span>
        )}
      </div>

      {open && <CartDropdown />}
    </div>
  );
}
