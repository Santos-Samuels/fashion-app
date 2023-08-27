import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BackButton, Button, ProductRate, ScreenContainer } from "@src/components";
import { RootStackParamList } from "@src/routes/stack.routes";
import { getOfferPrice } from "@src/shared/helpers/getOfferPrice";
import { ProductServices } from "@src/shared/services";
import { useQuery } from "@tanstack/react-query";
import { Image, Text, View } from "react-native";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "ProductDatails">;

const ProductDatailsScreen: React.FC<ScreenProps> = ({ route }) => {
  const { productId } = route.params;

  const { isLoading, data } = useQuery({
    queryKey: [`product-${productId}`],
    queryFn: ProductServices.getById.bind(null, productId),
  });

  const formatDescription = (description: string) => {
    return description[0].toUpperCase() + description.substring(1);
  };

  if (isLoading) return <Text>Loading...</Text>;

  const product = data?.data!;

  return (
    <ScreenContainer justifyContent="justify-start">
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
        <View>
          <Text className="text-lg font-semibold">{product.title}</Text>

          <Text className="text-lg font-semibold mt-3">Description</Text>
          <Text className="text-zinc-600 mb-3">
            {formatDescription(product.description)}
          </Text>

          <ProductRate
            rating={product.rating}
            starsSize={25}
            key={`rate-product-${product.id}`}
          />
        </View>

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

export default ProductDatailsScreen;
