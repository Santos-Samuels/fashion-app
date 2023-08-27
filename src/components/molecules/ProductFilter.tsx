import { Ionicons } from "@expo/vector-icons";
import { ProductFilterParams } from "@src/shared/interfaces/Product";
import { colors } from "@src/shared/themes/colors";
import { TextInput, TouchableOpacity, View } from "react-native";
import Button from "../atoms/Button";
import CategoryBridge from "../atoms/CategoryBridge";

interface ProductFilterProps {
  filters?: ProductFilterParams;
  setFilters: (filter: ProductFilterParams) => void;
  filterHandler: () => void;
}

const Categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const ProductFilter: React.FC<ProductFilterProps> = ({
  filters,
  setFilters,
  filterHandler,
}) => {
  const filterItems = filters ?? { title: "", category: ["all"] };

  const toggleCategoryFilter = (category: string) => {
    // if category is "all", then clear all filters
    if (category === "all") {
      setFilters({
        ...filterItems,
        category: ["all"],
      });
      return;
    }

    // if category is already selected, then remove it from filters
    if (filterItems.category.includes(category)) {
      const filteredCategories = filterItems.category.filter(
        (item) => item !== category
      );

      if (filteredCategories.length === 0) {
        filteredCategories.push("all");
      }

      setFilters({
        ...filterItems,
        category: filteredCategories || ["all"],
      });
      return;
    }

    // if category is not selected, then add it to filters
    // and remove "all" category if any other categories are selected
    if (filterItems.category.includes("all")) filterItems.category.pop();

    setFilters({
      ...filterItems,
      category: [category, ...filterItems.category],
    });
  };

  return (
    <>
      <View className="flex-row items-center justify-between mb-3 w-full">
        <View className="flex-1 flex-row items-center bg-white rounded-lg px-3 py-2 mr-2">
          <Ionicons name="search" size={24} color={colors.iconColor_light} />
          <TextInput
            className="flex-1 ml-2 text-zinc-700"
            placeholder="Search by title"
            defaultValue={filterItems.title || ""}
            onChangeText={(text) => setFilters({ ...filterItems, title: text })}
            style={{ fontSize: 17 }}
          />
        </View>
        <Button size="sm" onPress={filterHandler} title="Clear" />
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
