import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "@src/context/AppContext";
import { Categories } from "@src/shared/constants/productCategories";
import { colors } from "@src/shared/themes/colors";
import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import Button from "../atoms/Button";
import CategoryBridge from "../atoms/CategoryBridge";
import Input from "../atoms/Input";

const ProductFilter = () => {
  const { filters, setFilters, toggleCategoryFilter } = useContext(AppContext);
  const filterItems = filters ?? { title: "", category: ["all"] };

  return (
    <>
      <View className="flex-row items-center justify-between mb-3 w-full">
        <Input
          adicionalClass="mr-2"
          placeholder="Search by title"
          value={filterItems.title || ""}
          onChangeText={(text) => setFilters({ ...filterItems, title: text })}
          style={{ fontSize: 17 }}
          icon={
            <Ionicons name="search" size={24} color={colors.iconColor_light} />
          }
        />
        <Button size="sm" onPress={() => setFilters(undefined)} title="Clear" />
      </View>

      <View className="flex-row items-center justify-between w-full gap-1 mb-4">
        {Categories.map((category) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={category}
            onPress={() => toggleCategoryFilter(category)}
          >
            <CategoryBridge
              category={category}
              isActived={filterItems.category.includes(category)}
            />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default ProductFilter;
