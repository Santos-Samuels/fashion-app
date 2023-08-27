import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDatailsScreen } from "@src/screens";
import TabRoutes from "./tab.routes";

export type RootStackParamList = {
  HomesTab: undefined;
  ProductDatails: { productId: number };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
    <Navigator
      initialRouteName="HomesTab"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="HomesTab" component={TabRoutes} />
      <Screen name="ProductDatails" component={ProductDatailsScreen} />
    </Navigator>
  );
};

export default StackRoutes;
