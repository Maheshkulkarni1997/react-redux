// src/route/Layout.jsx
import CartIcon from "../components/CartIcon";
import { Outlet } from "react-router-dom";
import background from "../assets/background1.jpg"; // import your image

export default function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh", // ensure it fills screen
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CartIcon /> {/* always visible */}
      <div style={{ padding: 40, backgroundColor: "rgba(255,255,255,0.8)" }}>
        {/* optional semi-transparent background for readability */}
        <h1>🛒 React 19 E-Commerce</h1>
        <Outlet /> {/* renders child route */}
      </div>
    </div>
  );
}
