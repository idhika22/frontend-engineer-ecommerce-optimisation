import React, { useCallback, Suspense } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useProducts } from "../context/ProductsContext";
import type { Product } from "../data/productsByCategory";


const ProductCard = React.lazy(() => import("../components/ProductCard"));

const Products = () => {
  const productsWithImagesByCategory = useProducts();
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(
    (product: Product) => {
      dispatch(addToCart({ ...product, quantity: 1 }));
    },
    [dispatch]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <Suspense fallback={<div className="font-bold">Loading products...</div>}>
        {Object.keys(productsWithImagesByCategory).map((category) =>
          productsWithImagesByCategory[category].map((p: Product) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={() => handleAddToCart(p)}
            />
          ))
        )}
      </Suspense>
    </div>
  );
};

export default Products;
