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
