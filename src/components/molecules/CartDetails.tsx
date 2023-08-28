import { AppContext } from "@src/context/AppContext";
import { useContext } from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";

const CartDetails = () => {
  const { calculateCartTotal } = useContext(AppContext);
  const { subTotal, discount, total } = calculateCartTotal();

  return (
    <View className="bg-white rounded-t-3xl p-5 pb-7 -m-3 mt-2">
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-zinc-400 mr-2">Sub-Total: </Text>
        <Text className="text-zinc-400 font-semibold">
          {subTotal.toFixed(2)} $
        </Text>
      </View>

      <View className="flex-row items-center justify-between pb-3">
        <Text className="text-zinc-400 mr-2">Discount: </Text>
        <Text className="text-zinc-400 font-semibold">
          {discount.toFixed(2)} $
        </Text>
      </View>

      <View className="flex-row items-center justify-between border-t border-zinc-200 pt-3">
        <Text className="text-base mr-2">Total: </Text>
        <Text className="text-base font-semibold">{total.toFixed(2)} $</Text>
      </View>

      <View className="mt-5">
        <Button title={"Checkout"} onPress={() => {}} />
      </View>
    </View>
  );
};

export default CartDetails;
