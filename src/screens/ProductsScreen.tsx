import { useEffect, useState } from "react";
import { Text } from "react-native";
import { ProductList, ScreenContainer } from "../components";
import { Product } from "../shared/interfaces/Product";
import { ProductServices } from "../shared/services";

const ProductsScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    const { list } = ProductServices;

    try {
      const { data } = await list();
      setProducts(data);
    } catch (error) {}
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ScreenContainer>
      <Text className="text-center mb-2">Filters Comes Here</Text>

      <ProductList products={products} isLoading={isLoading} />
    </ScreenContainer>
  );
};

export default ProductsScreen;
