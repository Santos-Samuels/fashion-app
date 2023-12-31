import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "@src/shared/themes/colors";
import { Text, View } from "react-native";

interface VoidListMessageProps {
  message: string;
}

const VoidListMessage: React.FC<VoidListMessageProps> = ({ message }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <View testID="exclamation-triangle">
        <FontAwesome5
          name="exclamation-triangle"
          size={50}
          color={colors.iconColor_light}
        />
      </View>
      <Text className="text-lg mt-2 text-zinc-400 text-center w-5/6">
        {message}
      </Text>
    </View>
  );
};

export default VoidListMessage;
