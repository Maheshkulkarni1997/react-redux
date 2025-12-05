import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../features/auth/ProtectedRoute.jsx";
import Checkout from "../features/auth/Checkout.jsx";
import Layout from "./Layout.jsx";
import Login from "../features/auth/Login.jsx";
import ProductList from "../features/products/ProductList.jsx";
import Cart from "../features/cart/Cart.jsx";
import ProductsByCategoryPage from "../features/products/ProductsByCategoryPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
  <Route index element={<ProductList />} />  {/* Default homepage */}
  <Route path="products" element={<ProductList />} />
  <Route path="products-by-category" element={<ProductsByCategoryPage />} />
  <Route path="login" element={<Login />} />
  <Route path="cart" element={<Cart />} />
  <Route path="checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
</Route>

    </Routes>
  );
}
