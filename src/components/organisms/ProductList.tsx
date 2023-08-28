import { AppContext } from "@src/context/AppContext";
import { Product } from "@src/shared/interfaces/Product";
import { useContext } from "react";
import { FlatList, Text } from "react-native";
import VoidListMessage from "../atoms/VoidListMessage";
import ProductFilter from "../molecules/ProductFilter";
import ProductItem from "../molecules/ProductItem";
import ProductListSkeleton from "../molecules/ProductListSkeleton";

interface ProductListProps {
  products?: Product[];
  isLoading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, isLoading }) => {
  const { filters } = useContext(AppContext);

  if (isLoading) return <ProductListSkeleton />;

  if (products?.length === 0 && !filters)
    return <VoidListMessage message="There're no products to list!" />;

  return (
    <>
      <ProductFilter />

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
