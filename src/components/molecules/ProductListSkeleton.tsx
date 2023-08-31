import { View, useWindowDimensions } from "react-native";
import * as Animatable from "react-native-animatable";

const ProductListSkeleton = () => {
  const getItems = () => {
    const items = [];
    const { width } = useWindowDimensions();
    const itemWidth = width / 2 - 18;

    for (let i = 0; i < 6; i++) {
      items.push(
        <View
          className={`bg-white rounded-xl p-3 mb-3 ${i % 2 === 1 && "ml-3"}`}
          key={`skeleton-item-${i}`}
          style={{ width: itemWidth }}
        >
          <Animatable.View
            animation="flash"
            iterationCount="infinite"
            easing="ease"
            duration={5000}
          >
            <View className="bg-zinc-200 rounded-lg h-[120px] mb-2" />
            <View className="bg-zinc-200 rounded-lg p-1 mb-2" />
            <View className="bg-zinc-200 rounded-lg p-2 mb-2" />
            <View className="flex-row items-end justify-between">
              <View className="bg-zinc-200 rounded-lg p-3.5 w-1/2" />
              <View className="bg-zinc-200 rounded-lg p-1.5 w-12" />
            </View>
          </Animatable.View>
        </View>
      );
    }

    return items;
  };

  return (
    <View testID="loading-skeleton" className="flex-row items-center justify-between w-full flex-wrap">
      {getItems()}
    </View>
  );
};

export default ProductListSkeleton;
