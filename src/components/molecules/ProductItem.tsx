import { Ionicons } from "@expo/vector-icons";
import { Product } from "@src/shared/interfaces/Product";
import React from "react";
import { Image, Text, View } from "react-native";

interface ProductItemProps {
  product: Product;
  index: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, index }) => {
  const getOfferPrice = (price: number) => {
    return (price - price * 0.1).toFixed(2);
  };
  
  return (
    <View className={`w-1/2 mb-3 ${index % 2 === 1 && "pl-3"}`}>
      <View className="bg-white p-3 rounded-xl relative">
        <View className="items-center absolute right-3 p-1 rounded-b-lg z-10 bg-slate-100">
          <Ionicons name="star" size={18} color="#e4ca05" />
          <Text className="font-bold">{product.rating.rate}</Text>
        </View>

        <Image
          className="self-center mb-2"
          source={{ uri: product.image }}
          style={{ height: 120, width: 120 }}
          resizeMode="contain"
        />

        <Text className="text-slate-400 text-center text-xs">
          {product.category}
        </Text>

        <Text className="font-semibold text-normal max-h-9 my-1">
          {product.title}
        </Text>

        <View className="flex-row items-end justify-between">
          <Text className="font-bold text-lg text-amber-500 -mb-1">
            R$ {getOfferPrice(product.price)}
          </Text>
          <Text className="text-normal text-slate-300 line-through">
            R$ {product.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
