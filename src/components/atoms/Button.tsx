import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  size?: "sm" | "md" | "lg";
}

const sizesStyle = {
  sm: "py-2 px-4",
  md: "py-3 px-6",
  lg: "py-4 px-8",
};

const Button: React.FC<ButtonProps> = ({ title, onPress, size }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-zinc-800 rounded-lg ${sizesStyle[size || "md"]}`}
    >
      <Text className="font-semibold text-white text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
