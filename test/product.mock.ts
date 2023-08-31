import { Product } from "@src/shared/interfaces/Product";

export const product: Product = {
  id: 1,
  title: "Product 1",
  description: "Product 1 description",
  image: "https://via.placeholder.com/300",
  price: 100,
  category: "jewelery",
  rating: {
    rate: 4,
    count: 10,
  },
};

export const products: Product[] = [
  {
    id: 1,
    title: "Product 1",
    description: "Product 1 description",
    image: "https://via.placeholder.com/300",
    price: 100,
    category: "jewelery",
    rating: {
      rate: 4,
      count: 10,
    },
  },
  {
    id: 2,
    title: "Product 2",
    description: "Product 2 description",
    image: "https://via.placeholder.com/300",
    price: 200,
    category: "electronics",
    rating: {
      rate: 5,
      count: 20,
    },
  },
];
