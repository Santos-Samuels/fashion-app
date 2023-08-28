import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  BackButton,
  Button,
  InputNumber,
  ProductDetailsSkeleton,
  ProductRate,
  ScreenContainer,
  VoidListMessage,
} from "@src/components";
import { AppContext } from "@src/context/AppContext";
import { RootStackParamList } from "@src/routes/stack.routes";
import { getOldPrice } from "@src/shared/helpers/getOldPrice";
import { Product } from "@src/shared/interfaces/Product";
import { ProductServices } from "@src/shared/services";
import { useQuery } from "@tanstack/react-query";
import { useContext, useMemo, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "ProductDetails">;

const ProductDetailsScreen: React.FC<ScreenProps> = ({ route }) => {
  const { productId } = route.params;
  const [quantity, setQuantity] = useState<number>(1);
  const { addCartItem, cart } = useContext(AppContext);
  const navigation = useNavigation();

  const { isLoading, data, error } = useQuery({
    queryKey: [`product-${productId}`],
    queryFn: ProductServices.getById.bind(null, productId),
  });

  const isAddedInCart = useMemo(
    () => cart.some((item) => item.id === productId),
    [cart, productId]
  );

  const formatDescription = (description: string) => {
    return description[0].toUpperCase() + description.substring(1);
  };

  const addToCarthHandler = (product: Product) => {
    if (!isAddedInCart) {
      addCartItem({
        ...product,
        quantity,
        oldPrice: Number(oldPrice),
      });
    }

    navigation.navigate("Cart");
  };

  if (isLoading) return <ProductDetailsSkeleton />;

  if (error || !data?.data)
    return <VoidListMessage message="Failed to load product details!" />;

  const product = data.data;
  const oldPrice = getOldPrice(product.price);

  return (
    <ScreenContainer>
      <View className="bg-white -mt-16 rounded-b-3xl -mx-3 justify-self-start">
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
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            className="text-zinc-600 mb-3"
          >
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
                $ {product.price}
              </Text>
              <Text className="text-normal text-zinc-400 line-through">
                $ {oldPrice}
              </Text>
            </View>
          </View>

          <Button
            title={isAddedInCart ? "Added" : "Add to Cart"}
            onPress={() => addToCarthHandler(product)}
            icon={
              isAddedInCart ? (
                <Ionicons name="checkmark-sharp" size={24} color="white" />
              ) : null
            }
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default ProductDetailsScreen;
