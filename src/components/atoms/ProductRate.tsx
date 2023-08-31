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

    const unicId = new Date().getTime();
    for (let index = 0; index < +stars[0]; index++) {
      toRenderStars.push(
        <View testID="star" key={`star-${unicId + index}`}>
          <Ionicons name="star" size={starsSize} color="#e4ca05" />
        </View>
      );
    }

    if (+stars[1] > 0)
      toRenderStars.push(
        <View testID="star-half-sharp" key={`star-half-sharp-${unicId}`}>
          <Ionicons name="star-half-sharp" size={starsSize} color="#e4ca05" />
        </View>
      );

    if (toRenderStars.length < 5) {
      for (let index = 0; toRenderStars.length < 5; index++) {
        toRenderStars.push(
          <View testID="star-outline" key={`star-outline-${unicId + index}`}>
            <Ionicons name="star-outline" size={starsSize} color="#e4ca05" />
          </View>
        );
      }
    }

    return toRenderStars;
  };

  return (
    <View className="flex-row items-center justify-between rounded-lg z-10 bg-white p-2">
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
