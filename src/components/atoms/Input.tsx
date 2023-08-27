import { Ionicons } from "@expo/vector-icons";
import { colors } from "@src/shared/themes/colors";
import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  icon?: ReactNode;
  adicionalClass?: string;
  type?: "text" | "number";
}

const Input: React.FC<InputProps> = ({
  adicionalClass,
  icon,
  type,
  ...rest
}) => {
  if (type == "number") {
    rest.keyboardType = "numeric";

    return (
      <View
        className={`flex-1 flex-row items-center bg-white rounded-lg px-3 py-2 ${adicionalClass}`}
      >
        <Ionicons name="add" size={24} color={colors.iconColor_light} />

        <TextInput
          className="flex-1 ml-2 text-zinc-700"
          {...rest}
          style={{ fontSize: 17 }}
        />
        
        <Ionicons name="remove" size={24} color={colors.iconColor_light} />
      </View>
    );
  }

  return (
    <View
      className={`flex-1 flex-row items-center bg-white rounded-lg px-3 py-2 ${adicionalClass}`}
    >
      {icon}
      <TextInput
        className="flex-1 ml-2 text-zinc-700"
        {...rest}
        style={{ fontSize: 17 }}
      />
    </View>
  );
};

export default Input;
