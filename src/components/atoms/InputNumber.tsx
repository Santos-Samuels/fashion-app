import { Ionicons } from "@expo/vector-icons";
import { colors } from "@src/shared/themes/colors";
import { Text, View } from "react-native";

interface InputNumberProps {
  value: number;
  setValue: (value: number) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({ value, setValue }) => {
  const handleIncrement = () => {
    if (value < 10) setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) setValue(value - 1);
  };

  return (
    <View className="flex-row items-center justify-between bg-white rounded-lg px-3 py-2">
      <Ionicons
        name="remove"
        size={24}
        onPress={handleDecrement}
        color={value > 1 ? colors.tabMenuIcons_active : colors.iconColor_light}
      />

      <Text
        className="font-semibold mx-2 text-zinc-700"
        style={{ fontSize: 17 }}
      >
        {value}
      </Text>

      <Ionicons
        name="add"
        size={24}
        onPress={handleIncrement}
        color={colors.tabMenuIcons_active}
      />
    </View>
  );
};

export default InputNumber;