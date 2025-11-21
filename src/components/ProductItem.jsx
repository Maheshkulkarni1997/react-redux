import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #ccc", padding: 20 }}>
      <img src={product.image} alt={product.title} width="100" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to cart
      </button>
    </div>
  );
}
