import { Text, View } from "react-native";

interface CategoryBridgeProps {
  category: string;
  isActived: boolean;
}

const CategoryBridge: React.FC<CategoryBridgeProps> = ({
  category,
  isActived,
}) => {
  return (
    <View
      className={`rounded-full px-1.5 py-1 ${
        isActived ? "bg-amber-500" : "bg-zinc-300"
      }`}
    >
      <Text className={`text-xs ${isActived ? "text-white" : "text-zinc-500"}`}>
        {category}
      </Text>
    </View>
  );
};

export default CategoryBridge;
