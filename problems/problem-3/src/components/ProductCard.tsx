import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../context/ProductsContext";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, onAddToCart }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="bg-white p-4 rounded-3xl shadow-md hover:shadow-lg transition">
      <Link to={`/products/${product.id}`}>
        {!imgLoaded && <div className="bg-gray-300 w-full h-60 animate-pulse rounded-md" />}
        <img
         src={product.image}
         sizes="(max-width: 768px) 480px, (max-width: 1200px) 768px, 1200px"
         alt={product.name}
         loading="lazy"
         width={320}
         height={160}
         className={`w-full h-60 object-cover rounded-md ${imgLoaded ? '' : 'hidden'}`}
         onLoad={() => setImgLoaded(true)}
        />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600 font-semibold">${product.price}</p>
      </Link>
      <button
        onClick={onAddToCart}
        className="bg-blue-500 text-white px-3 py-1 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
});

export default ProductCard;
