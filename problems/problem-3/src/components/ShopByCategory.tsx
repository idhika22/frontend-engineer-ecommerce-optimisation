import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import type { Product } from "../data/productsByCategory";

const ShopByCategory: React.FC = () => {
  const productsWithImagesByCategory = useProducts();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
        {Object.keys(productsWithImagesByCategory).map((category) =>
          productsWithImagesByCategory[category].map((p: Product) => (
            <Link
              key={p.name}
              to={`/category/${p.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex flex-col items-center group"
            >
              <div
                className={`w-48 h-48 rounded-full flex items-center justify-center shadow-md overflow-hidden transition transform group-hover:scale-105 bg-white`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-26 h-26 object-contain"
                />
              </div>
              <span className="mt-3 text-sm font-medium">{p.name}</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ShopByCategory;
