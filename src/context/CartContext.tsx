import { Cart, CartItemType, CartsBill } from "@src/shared/interfaces/Cart";
import { PropsWithChildren, createContext, useState } from "react";

interface ContextProps {
  cart: Cart;
  addCartItem: (item: CartItemType) => void;
  removeCartItem: (item: CartItemType) => void;
  UpdateCart: (item: CartItemType) => void;
  calculateCartTotal: () => CartsBill;
  clearCart: () => void;
}

const initialCart: Cart = {
  items: [],
  discount: 0,
  subTotal: 0,
  total: 0,
};

const CartContext = createContext<ContextProps>({} as ContextProps);

const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<Cart>(initialCart);

  const calculateCartTotal = (): CartsBill => {
    return cart.items.reduce(
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
    setCart((prev) => ({
      ...prev,
      items: [...prev.items, item],
    }));
  };

  const removeCartItem = (item: CartItemType) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((i) => i.id !== item.id),
    }));
  };

  const clearCart = () => {
    setCart(initialCart);
  };

  const UpdateCart = (item: CartItemType) => {
    const updatedItems = cart.items.map((i) => {
      if (i.id === item.id)
        return {
          ...i,
          quantity: item.quantity,
        };

      return i;
    });

    setCart((prev) => ({
      ...prev,
      items: updatedItems,
    }));
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
