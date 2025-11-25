// src/route/Layout.jsx
import CartIcon from "../components/CartIcon";
import { Outlet } from "react-router-dom"; // renders child routes

export default function Layout() {
  return (
    <div>
      <CartIcon /> {/* always visible */}
      <div style={{ padding: 40 }}>
        <h1 
        >🛒 React 19 E-Commerce </h1>
        <Outlet /> {/* renders the child route component */}
      </div>
    </div>
  );
}
