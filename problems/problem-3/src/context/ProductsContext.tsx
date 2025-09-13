import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { productsWithImagesByCategory } from "../utils/productsWithImage";


type ProductsContextType = typeof productsWithImagesByCategory;

// 2. Create the context
const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

// 3. Provider
export const ProductsProvider = ({ children }: { children: ReactNode }) => (
  <ProductsContext.Provider value={productsWithImagesByCategory}>
    {children}
  </ProductsContext.Provider>
);

// 4. Custom hook
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
