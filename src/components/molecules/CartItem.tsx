import { Ionicons } from "@expo/vector-icons";
import { CartContext } from "@src/context/CartContext";
import { CartItemType } from "@src/shared/interfaces/Cart";
import { colors } from "@src/shared/themes/colors";
import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import InputNumber from "../atoms/InputNumber";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { UpdateCart, removeCartItem } = useContext(CartContext);

  const updateItemQuantity = (updatedQuantity: number) => {
    UpdateCart({
      ...item,
      quantity: updatedQuantity,
    });
  };

  return (
    <View className="flex-row items-center justify-between w-full bg-white rounded-xl mb-3 px-3 py-2">
      <View className="mr-2">
        <Image
          source={{ uri: item.image }}
          style={{ height: 120, width: 120 }}
          resizeMode="contain"
        />
      </View>

      <View className="flex-1">
        <View className="flex-row items-start justify-between">
          <Text
            className="flex-1 font-semibold my-1 mr-1"
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {item.title}
          </Text>

          <TouchableOpacity onPress={() => removeCartItem(item)}>
            <Ionicons name="trash" size={24} color={colors.tabMenuIcons} />
          </TouchableOpacity>
        </View>

        <View className="flex-row">
          <Text className="text-zinc-400 mr-2">Quantity: </Text>
          <Text className="font-semibold">{item.quantity}</Text>
        </View>

        <View className="flex-row items-end justify-between mt-2 clas">
          <View className="items-end">
            <Text className="text-xs text-zinc-300 line-through -mb-1">
              $ {item.oldPrice}
            </Text>
            <Text className="font-bold text-lg text-amber-500">
              $ {item.price}
            </Text>
          </View>

          <View>
            <InputNumber
              isBordered
              value={item.quantity}
              setValue={updateItemQuantity}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
