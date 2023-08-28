import { CartContext } from "@src/context/CartContext";
import { useContext } from "react";
import { FlatList, Text } from "react-native";
import VoidListMessage from "../atoms/VoidListMessage";
import CartItem from "../molecules/CartItem";

const CartList = () => {
  const { cart } = useContext(CartContext);

  if (cart.items.length === 0)
    return (
      <VoidListMessage message="Your cart is as empty as a desert island. Time to fill it up!" />
    );

  return (
    <>
      <Text className="text-base mb-2 text-zinc-400">
        {cart.items.length.toString().padStart(2, "0")}{" "}
        {cart.items.length === 1 ? "Item" : "Items"}
      </Text>

      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} key={item.id} />}
      />
    </>
  );
};

export default CartList;
