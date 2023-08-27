import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetailsScreen } from "@src/screens";
import TabRoutes from "./tab.routes";

export type RootStackParamList = {
  HomesTab: undefined;
  ProductDetails: { productId: number };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
    <Navigator
      initialRouteName="HomesTab"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="HomesTab" component={TabRoutes} />
      <Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Navigator>
  );
};

export default StackRoutes;
