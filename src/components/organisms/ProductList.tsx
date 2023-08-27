import { Product } from '@src/shared/interfaces/Product';
import { FlatList, Text } from 'react-native';
import ProductItem from '../molecules/ProductItem';

interface ProductListProps {
  products?: Product[];
  isLoading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, isLoading }) => {
  if (isLoading) return <Text>Loading...</Text>;

  if (products?.length === 0) return <Text>There're no products to list!</Text>;

  return (
    <FlatList
        className="flex-1 flex-wrap"
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <ProductItem product={item} index={index} />
        )}
      />
  )
}

export default ProductList