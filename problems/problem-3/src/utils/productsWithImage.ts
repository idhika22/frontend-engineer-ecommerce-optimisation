import { productsByCategory } from "../data/productsByCategory";//actual data without image paths
import { importAllCategoryImages } from "../utils/importImages";//json data with image paths
import type { Product } from "../data/productsByCategory"//product interface

// Add actual image paths
const categoryImages = await importAllCategoryImages();
export const productsWithImagesByCategory: { [category: string]: Product[]} = {};

Object.keys(productsByCategory).forEach((category) => {
  productsWithImagesByCategory[category] = productsByCategory[category].map((p) => ({
    ...p,
    image: categoryImages[category][p.image],
  }));
});