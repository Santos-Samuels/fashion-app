import { CartItemType, CartsBill } from "@src/shared/interfaces/Cart";

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

export const calculateCartTotalMock = (): CartsBill => {
  return cartItems.reduce(
    (acc, item) => {
      const itemDiscount = (item.oldPrice - item.price) * item.quantity;
      const itemSubTotal = item.oldPrice * item.quantity;

      acc.discount += itemDiscount;
      acc.subTotal += itemSubTotal;
      acc.total += itemSubTotal - itemDiscount;

      return acc;
    },
    { discount: 0, subTotal: 0, total: 0 }
  );
};
