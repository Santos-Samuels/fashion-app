import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import ScreenContainer from "../models/ScreenContainer";

const ProductDetailsSkeleton = () => {
  return (
    <ScreenContainer>
      <View className="bg-white -mt-16 rounded-b-3xl justify-self-start">
        <Animatable.View
          animation="flash"
          iterationCount="infinite"
          easing="ease"
          duration={3000}
          className="mb-2 mt-24"
        >
          <View className="bg-zinc-200 rounded-lg self-center w-10/12 h-[300px] mx-2 mb-2" />
          <View className="bg-zinc-200 rounded-lg p-1 self-center w-10/12 mb-2" />
        </Animatable.View>
      </View>

      <Animatable.View
        animation="flash"
        iterationCount="infinite"
        easing="ease"
        duration={3000}
        className="flex-1 justify-between px-9 my-3 w-screen"
      >
        <View>
          <View className="bg-zinc-400/50 rounded-lg p-3 mb-4" />

          <View className="bg-zinc-400/50 rounded-lg p-2 mb-1.5" />
          <View className="bg-zinc-400/50 rounded-lg h-[110px] mb-4" />

          <View className="bg-zinc-400/50 rounded-lg p-2 mb-1.5" />
          <View className="flex-row items-end justify-between">
            <View className="bg-zinc-400/50 rounded-lg p-5 flex-1 mr-3" />
            <View className="bg-zinc-400/50 rounded-lg p-5 w-[110px]" />
          </View>
        </View>

        <View className="flex-row items-end justify-between">
          <View className="bg-zinc-400/50 rounded-lg p-6 flex-1 mr-3" />
          <View className="bg-zinc-400/50 rounded-lg p-2 w-[70px] mr-3" />
          <View className="bg-zinc-400/50 rounded-lg p-6 w-[110px]" />
        </View>
      </Animatable.View>
    </ScreenContainer>
  );
};

export default ProductDetailsSkeleton;
