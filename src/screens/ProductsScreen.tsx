import { useQuery } from "@tanstack/react-query";
import { Text } from "react-native";
import { ProductList, ScreenContainer } from "../components";
import { ProductServices } from "../shared/services";

const ProductsScreen = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: ProductServices.list.bind(null, {}),
  });

  return (
    <ScreenContainer>
      <Text className="text-center mb-2">Filters Comes Here</Text>

      <ProductList products={data?.data} isLoading={isLoading} />
    </ScreenContainer>
  );
};

export default ProductsScreen;
