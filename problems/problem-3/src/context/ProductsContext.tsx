import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import laptopImage from "../assets/laptop.jpg"
import phoneImage from "../assets/smartphone.jpg"
import headphoneImage from "../assets/headphone.jpg"
import gamingImage from "../assets/gamingconsole.jpg"
import speakerImage from "../assets/speaker.jpg"
import tabImage from "../assets/tablet.jpg"
import smartwatchImage from "../assets/watch.jpg"
import cameraImage from "../assets/camera.jpg"
import earpodImage from "../assets/earpods.jpg"
import earphoneImage from "../assets/earphones.jpg"
import keyboardImage from "../assets/keyboard.jpg"
import powerbankImage from "../assets/powerbank.jpg"
// Define product type
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductsContextType {
  products: Product[];
}

// Static products array (outside state)
const products: Product[] = [
  { id: 1, name: "Laptop", price: 50000, image: laptopImage },
  { id: 2, name: "Phone", price: 20000, image:phoneImage  },
  { id: 3, name: "Headphones", price: 3000, image: headphoneImage },
  { id: 4, name: "Gaming Console", price: 7000, image: gamingImage  },
  { id: 5, name: "Speaker", price: 8000, image: speakerImage  },
  { id: 6, name: "Tablet", price: 11000, image: tabImage },
  { id: 7, name: "SmartWatch", price: 6000, image:smartwatchImage  },
  { id: 8, name: "Camera", price: 15000, image: cameraImage },
  { id: 9, name: "Bluetooth Earpods", price: 7000, image: earpodImage },
  { id: 10, name: "Earphones", price: 1000, image:earphoneImage },
  { id: 11, name: "Keyboard", price: 9000, image: keyboardImage  },
  { id: 12, name: "Powerbank", price: 1599, image: powerbankImage  },
];

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => (
  <ProductsContext.Provider value={{ products }}>
    {children}
  </ProductsContext.Provider>
);

export const userProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be within a ProductsProvider");
  }
  return context;
};
