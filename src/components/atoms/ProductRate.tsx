import { Ionicons } from "@expo/vector-icons";
import { ProductRating } from "@src/shared/interfaces/Product";
import { Text, View } from "react-native";

interface ProductRateProps {
  rating: ProductRating;
  starsSize?: number;
}

const ProductRate: React.FC<ProductRateProps> = ({ rating, starsSize }) => {
  const getStars = (rate: number, starsSize: number) => {
    const toRenderStars: React.ReactNode[] = [];
    const stars = rate.toString().split(".");

    for (let index = 0; index < +stars[0]; index++) {
      toRenderStars.push(
        <Ionicons name="star" size={starsSize} color="#e4ca05" />
      );
    }

    if (+stars[1] > 0)
      toRenderStars.push(
        <Ionicons name="star-half-sharp" size={starsSize} color="#e4ca05" />
      );

    if (toRenderStars.length < 5) {
      for (let index = 0; toRenderStars.length < 5; index++) {
        toRenderStars.push(
          <Ionicons name="star-outline" size={starsSize} color="#e4ca05" />
        );
      }
    }

    return toRenderStars;
  };

  return (
    <View className="flex-row items-center justify-between rounded-lg z-10 bg-zinc-100 p-2">
      <View className="flex-row items-center">
        {getStars(rating.rate, 20)}
        <Text className="font-bold ml-2 text-lg">{rating.rate}</Text>
      </View>

      <Text className="text-zinc-400 mx-2">|</Text>
      <Text className="text-zinc-400">{rating.count} Reviews</Text>
    </View>
  );
};

export default ProductRate;
