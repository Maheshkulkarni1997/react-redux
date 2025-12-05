import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchFilteredProducts } from "./filteredProductsSlice";
import ProductItem from "../../components/ProductItem";

export default function ProductsByCategoryPage() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.filteredProducts);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) dispatch(fetchFilteredProducts({ category }));
  }, [dispatch, searchParams]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-lg font-bold mb-4">
        Products in {searchParams.get("category")}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {items.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
