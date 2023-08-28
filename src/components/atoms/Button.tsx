import { Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  icon?: React.ReactNode;
  title: string;
  onPress: () => void;
  size?: "sm" | "md" | "lg";
}

const sizesStyle = {
  sm: "py-2 px-4",
  md: "py-3 px-6",
  lg: "py-4 px-8",
};

const Button: React.FC<ButtonProps> = ({ title, onPress, size, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center justify-center bg-zinc-800 rounded-lg ${
        sizesStyle[size || "md"]
      }`}
    >
      {icon ? <View className="mr-1">{icon}</View> : null}
      <Text className="font-semibold text-white text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
