import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { ShoppingCart } from "lucide-react";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-2.5">
        <h3 className="text-xs font-medium text-gray-900 line-clamp-1 mb-1.5 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        
        <div className="flex items-center justify-between mb-2">
          <p className="text-base font-bold text-gray-900">${product.price}</p>
          <div className="flex items-center gap-0.5">
            <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-xs text-gray-600">4.5</span>
          </div>
        </div>

        <button 
          onClick={() => dispatch(addToCart(product))}
          className="w-full flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-2 rounded text-xs font-medium transition-colors active:scale-95"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}