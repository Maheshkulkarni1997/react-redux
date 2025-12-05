import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredProducts } from "./filteredProductsSlice";
import ProductItem from "../../components/ProductItem";
import CategoryGrid from "../../components/CategoryGrid";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.filteredProducts);

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    dispatch(fetchFilteredProducts({ category }));
  };

  // optional: load all products initially
  useEffect(() => {
    dispatch(fetchFilteredProducts({}));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-lg font-bold mb-3">Shop by Category</h2>
      <CategoryGrid
        onCategorySelect={handleCategorySelect}
        activeCategory={activeCategory}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
        {items.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
