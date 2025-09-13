import React from "react";
import { Link } from "react-router-dom";
import Card from './Card';
import type { Product } from "../data/productsByCategory";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, onAddToCart }) => {
  const actionButton = (
    <button
      onClick={onAddToCart}
      className="bg-blue-500 text-white px-3 py-1 rounded"
    >
      Add to Cart
    </button>
  );

  return (
    <Link to={'/products'}>
      <Card
        id={product.id}
        image={product.image} 
        title={product.name}
        price={product.price}
        actionButton={actionButton}
      />
    </Link>
  );
});

export default ProductCard;
