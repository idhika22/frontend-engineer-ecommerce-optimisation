export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  bestSeller?: boolean;
}
export interface CategoryProducts {
  [category: string]: Product[];
}
export const productsByCategory: CategoryProducts = {
  Laptops: [
    {
      id: 1,
      name: "Laptop",
      price: 70000,
      image: "laptop.jpg",
      bestSeller: true,
    }
  ],
  headPhones: [
    {
      id: 3,
      name: "Boat wired",
      price: 50000,
      image: "earphones.jpg",
      bestSeller: true,
    },
    { id: 4, name: "Noise Buds", price: 45000, image: "earpods.jpg", bestSeller:true },
    { id: 5, name: "airpods", price: 45000, image: "headphone.jpg" },
  ],
  watches: [
    {
      id: 6,
      name: "Titan",
      price: 60000,
      image: "watch.jpg",
      bestSeller: true,
    },
  ],
  television: [
    {
      id: 7,
      name: "SmartTV",
      price: 60000,
      image: "smartTv1.jpg",
      bestSeller: true,
    },
  ],
};
