import { CartItemType, CartsBill } from "@src/shared/interfaces/Cart";
import { ProductFilterParams } from "@src/shared/interfaces/Product";
import { PropsWithChildren, createContext, useState } from "react";

interface ContextProps {
  filters?: ProductFilterParams;
  setFilters: React.Dispatch<React.SetStateAction<ProductFilterParams | undefined>>
  cart: CartItemType[];
  addCartItem: (item: CartItemType) => void;
  removeCartItem: (item: CartItemType) => void;
  UpdateCart: (item: CartItemType) => void;
  calculateCartTotal: () => CartsBill;
  clearCart: () => void;
  toggleCategoryFilter: (category: string) => void;
}

const AppContext = createContext<ContextProps>({} as ContextProps);

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [filters, setFilters] = useState<ProductFilterParams>();

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

  const toggleCategoryFilter = (category: string) => {
    const filterItems = filters ?? { title: "", category: ["all"] };

    // if category is "all", then clear all filters
    if (category === "all") {
      setFilters({
        ...filterItems,
        category: ["all"],
      });
      return;
    }

    // if category is already selected, then remove it from filters
    if (filterItems.category.includes(category)) {
      const filteredCategories = filterItems.category.filter(
        (item) => item !== category
      );

      if (filteredCategories.length === 0) {
        filteredCategories.push("all");
      }

      setFilters({
        ...filterItems,
        category: filteredCategories || ["all"],
      });
      return;
    }

    // if category is not selected, then add it to filters
    // and remove "all" category if any other categories are selected
    if (filterItems.category.includes("all")) filterItems.category.pop();

    setFilters({
      ...filterItems,
      category: [category, ...filterItems.category],
    });
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addCartItem,
        removeCartItem,
        UpdateCart,
        clearCart,
        calculateCartTotal,
        filters,
        setFilters,
        toggleCategoryFilter
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
