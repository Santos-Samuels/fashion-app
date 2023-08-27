import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getOfferPrice } from "@src/shared/helpers/getOfferPrice";
import { Product } from "@src/shared/interfaces/Product";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

interface ProductItemProps {
  product: Product;
  index: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, index }) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const itemWidth = width / 2 - 12;

  return (
    <TouchableOpacity
      className={`mb-3 ${index % 2 === 1 && "pl-3"}`}
      style={{ width: itemWidth }}
      onPress={() =>
        navigation.navigate("ProductDatails", { productId: product.id })
      }
    >
      <View className="bg-white p-3 rounded-xl relative">
        <View className="items-center absolute right-3 p-1 rounded-b-lg z-10 bg-zinc-100">
          <Ionicons name="star" size={18} color="#e4ca05" />
          <Text className="font-bold">{product.rating.rate}</Text>
        </View>

        <Image
          className="self-center mb-2"
          source={{ uri: product.image }}
          style={{ height: 120, width: 120 }}
          resizeMode="contain"
        />

        <Text className="text-zinc-400 text-center text-xs">
          {product.category}
        </Text>

        <Text className="font-semibold text-normal max-h-9 my-1">
          {product.title}
        </Text>

        <View className="flex-row items-end justify-between">
          <Text className="font-bold text-lg text-amber-500 -mb-1">
            R$ {getOfferPrice(product.price)}
          </Text>
          <Text className="text-normal text-zinc-300 line-through">
            R$ {product.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
