import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenContainer } from '@src/components';
import { RootStackParamList } from '@src/routes/stack.routes';
import { Text } from 'react-native';

type ScreenProps = NativeStackScreenProps<RootStackParamList, "ProductDatails">;

const ProductDatailsScreen: React.FC<ScreenProps> = ({ route }) => {
  return (
    <ScreenContainer>
      <Text>ProductDatailsScreen - {route.params.productId}</Text>
    </ScreenContainer>
  )
}

export default ProductDatailsScreen