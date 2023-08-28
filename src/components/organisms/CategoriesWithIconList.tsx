import { useNavigation } from "@react-navigation/native";
import { AppContext } from "@src/context/AppContext";
import { CategoriesWithIcon } from "@src/shared/constants/productCategories";
import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CategoriesWithIconList = () => {
  const { setFilters } = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center gap-3 flex-wrap justify-center mt-5">
      {CategoriesWithIcon.map((category) => (
        <TouchableOpacity
          onPress={() => {
            setFilters({ title: "", category: [category.name] });
            navigation.navigate("Products");
          }}
          className="bg-white rounded-xl p-3 items-center w-5/12"
          key={category.name}
        >
          <Image
            className="self-center mb-2 rounded-full"
            source={{ uri: category.icon }}
            style={{ height: 120, width: 120 }}
            resizeMode="cover"
          />
          <Text className="text-zinc-400">{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoriesWithIconList;
