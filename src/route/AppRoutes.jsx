import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../features/auth/ProtectedRoute.jsx";
import Checkout from "../features/auth/Checkout.jsx";
import Layout from "./Layout.jsx";
import Login from "../features/auth/Login.jsx";
import ProductList from "../features/products/ProductList.jsx";
import Cart from "../features/cart/Cart.jsx";
export default function AppRoutes() {
    return (
      <Routes>
        {/* Parent layout route */}
        <Route path="/" element={<Layout />}>
          {/* Child routes */}
          <Route index element={<ProductList />} />          
          <Route path="login" element={<Login />} />        {/* /login */}
          <Route path="cart" element={<Cart />} />          {/* /cart */}
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          {/* Add more modules here */}
        </Route>
      </Routes>
    );
  }
  