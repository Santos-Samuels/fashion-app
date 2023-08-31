import { CartItemType } from "@src/shared/interfaces/Cart";

export const cartItem: CartItemType = {
  id: 1,
  title: "Product 1",
  description: "Product 1 description",
  image: "https://via.placeholder.com/300",
  price: 100,
  oldPrice: 110,
  category: "jewelery",
  rating: {
    rate: 4,
    count: 10,
  },
  quantity: 2,
};

export const cartItems: CartItemType[] = [
  {
    id: 1,
    title: "Product 1",
    description: "Product 1 description",
    image: "https://via.placeholder.com/300",
    price: 100,
    oldPrice: 110,
    category: "jewelery",
    rating: {
      rate: 4,
      count: 10,
    },
    quantity: 2,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Product 2 description",
    image: "https://via.placeholder.com/300",
    price: 200,
    oldPrice: 220,
    category: "electronics",
    rating: {
      rate: 5,
      count: 20,
    },
    quantity: 4,
  },
];
