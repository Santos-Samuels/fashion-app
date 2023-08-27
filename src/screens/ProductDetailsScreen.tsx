import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  BackButton,
  Button,
  InputNumber,
  ProductRate,
  ScreenContainer,
  VoidListMessage,
} from "@src/components";
import { RootStackParamList } from "@src/routes/stack.routes";
import { getOfferPrice } from "@src/shared/helpers/getOfferPrice";
import { ProductServices } from "@src/shared/services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "ProductDetails">;

const ProductDetailsScreen: React.FC<ScreenProps> = ({ route }) => {
  const { productId } = route.params;
  const [quantity, setQuantity] = useState<number>(1);

  const { isLoading, data, error } = useQuery({
    queryKey: [`product-${productId}`],
    queryFn: ProductServices.getById.bind(null, productId),
  });

  const formatDescription = (description: string) => {
    return description[0].toUpperCase() + description.substring(1);
  };

  if (isLoading) return <Text>Loading...</Text>;

  if (error || !data?.data)
    return <VoidListMessage message="Failed to load product details!" />;

  const product = data.data;

  return (
    <ScreenContainer>
      <View className="bg-white -mt-16 rounded-b-3xl w-screen justify-self-start">
        <View className="mb-2 mt-24 relative">
          <Image
            className="self-center"
            source={{ uri: product.image }}
            style={{ height: 350, width: 350 }}
            resizeMode="contain"
          />
          <BackButton absolute />
        </View>

        <Text className="text-center mb-3 text-zinc-500">
          {product.category}
        </Text>
      </View>

      <View className="m-3 flex-1 justify-between">
        <ScrollView>
          <Text className="text-lg font-semibold">{product.title}</Text>

          <Text className="text-lg font-semibold mt-3">Description</Text>
          <Text className="text-zinc-600 mb-3">
            {formatDescription(product.description)}
          </Text>

          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg font-semibold">Rating</Text>
              <ProductRate rating={product.rating} starsSize={25} />
            </View>
            <View className="flex-1 ml-4">
              <Text className="text-lg font-semibold">Quantity</Text>
              <InputNumber value={quantity} setValue={setQuantity} />
            </View>
          </View>
        </ScrollView>

        <View className="flex-row items-end justify-between">
          <View>
            <Text className="text-lg font-semibold mt-3">Price</Text>
            <View className="flex-row items-end gap-3">
              <Text className="font-bold text-3xl text-amber-500 -mb-1">
                R$ {getOfferPrice(product.price)}
              </Text>
              <Text className="text-normal text-zinc-400 line-through">
                R$ {product.price}
              </Text>
            </View>
          </View>

          <Button title="Add to Cart" onPress={() => {}} />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default ProductDetailsScreen;
