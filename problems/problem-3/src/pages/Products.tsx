import React, { useCallback, Suspense } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { userProducts } from "../context/ProductsContext";
import type { Product } from "../context/ProductsContext";


const ProductCard = React.lazy(() => import("../components/ProductCard"));

const Products = () => {
  const { products } = userProducts();
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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </Suspense>
    </div>
  );
};

export default Products;
