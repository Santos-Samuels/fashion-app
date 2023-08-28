import { Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

const ShopBanner = () => {
  return (
    <Animatable.View
      animation="shake"
      easing="ease"
      duration={5000}
      iterationCount="infinite"
      className="bg-white p-3 rounded-xl items-center mb-5"
    >
      <View className="border-b border-zinc-200 pb-1">
        <Text className="text-amber-500 text-2xl font-bold tracking-widest">
          Fashion Shop
        </Text>
      </View>
      <Text className="text-zinc-400 pt-1">
        Shaking up things fashion concept.
      </Text>
    </Animatable.View>
  );
};

export default ShopBanner;
