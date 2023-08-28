import { Product, ProductFilterParams } from "@src/shared/interfaces/Product";
import { FlatList, Text } from "react-native";
import VoidListMessage from "../atoms/VoidListMessage";
import ProductFilter from "../molecules/ProductFilter";
import ProductItem from "../molecules/ProductItem";
import ProductListSkeleton from "../molecules/ProductListSkeleton";

interface ProductListProps {
  products?: Product[];
  isLoading: boolean;
  filters?: ProductFilterParams;
  setFilters: (filter?: ProductFilterParams) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  isLoading,
  filters,
  setFilters,
}) => {
  if (isLoading) return <ProductListSkeleton />;

  if (products?.length === 0 && !filters)
    return <VoidListMessage message="There're no products to list!" />;

  return (
    <>
      <ProductFilter
        filters={filters}
        setFilters={(filters) => setFilters(filters)}
        filterHandler={() => setFilters(undefined)}
      />

      {products?.length !== 0 ? (
        <>
          <Text className="text-base mb-2 text-zinc-400">
            {products?.length.toString().padStart(2, "0")}{" "}
            {products?.length === 1 ? "Item" : "Items"}
          </Text>

          <FlatList
            className="flex-1 flex-wrap"
            numColumns={products!.length >= 2 ? 2 : 1}
            data={products}
            keyExtractor={(item) => item.id.toString()}
            key={products?.length}
            renderItem={({ item, index }) => (
              <ProductItem product={item} index={index} />
            )}
          />
        </>
      ) : (
        <VoidListMessage message="No matching products found!" />
      )}
    </>
  );
};

export default ProductList;
