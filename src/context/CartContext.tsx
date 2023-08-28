import { CartItemType, CartsBill } from "@src/shared/interfaces/Cart";
import { PropsWithChildren, createContext, useState } from "react";

interface ContextProps {
  cart: CartItemType[];
  addCartItem: (item: CartItemType) => void;
  removeCartItem: (item: CartItemType) => void;
  UpdateCart: (item: CartItemType) => void;
  calculateCartTotal: () => CartsBill;
  clearCart: () => void;
}

const CartContext = createContext<ContextProps>({} as ContextProps);

const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const calculateCartTotal = (): CartsBill => {
    return cart.reduce(
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

  const addCartItem = (item: CartItemType) => {
    setCart((prev) => [...prev, item]);
  };

  const removeCartItem = (item: CartItemType) => {
    const updatedItems = cart.filter((i) => i.id !== item.id);
    setCart(updatedItems);
  };

  const clearCart = () => {
    setCart([]);
  };

  const UpdateCart = (item: CartItemType) => {
    const updatedItems = cart.map((i) => {
      if (i.id === item.id)
        return {
          ...i,
          quantity: item.quantity,
        };

      return i;
    });

    setCart(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCartItem,
        removeCartItem,
        UpdateCart,
        clearCart,
        calculateCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
