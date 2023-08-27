import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "@src/shared/themes/colors";
import { TouchableOpacity } from "react-native";

interface BackButtonProps {
  absolute?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ absolute }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className={`${absolute && "absolute"} rounded-3xl bg-zinc-200 p-2 left-3`}
    >
      <Ionicons name="arrow-back" size={20} color={colors.tabMenuIcons_active} />
    </TouchableOpacity>
  );
}

export default BackButton;
