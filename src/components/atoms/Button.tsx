import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="bg-zinc-800 py-3 px-6 rounded-lg">
      <Text className="font-semibold text-white text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
