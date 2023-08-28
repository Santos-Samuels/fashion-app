import { CartItemType } from "@src/shared/interfaces/Cart";
import { FlatList, Text } from "react-native";
import VoidListMessage from "../atoms/VoidListMessage";
import CartItem from "../molecules/CartItem";

interface CartListProps {
  cart: CartItemType[];
}

const CartList: React.FC<CartListProps> = ({ cart }) => {
  if (cart.length === 0)
    return (
      <VoidListMessage message="Your cart is as empty as a desert island. Time to fill it up!" />
    );

  return (
    <>
      <Text className="text-base mb-2 text-zinc-400">
        {cart.length.toString().padStart(2, "0")}{" "}
        {cart.length === 1 ? "Item" : "Items"}
      </Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} key={item.id} />}
      />
    </>
  );
};

export default CartList;
