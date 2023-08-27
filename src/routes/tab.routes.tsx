import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartScreen, HomeScreen, ProductsScreen } from "@src/screens";
import { colors } from "@src/shared/themes/colors";

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator
    initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={focused ? colors.tabMenuIcons_active : colors.tabMenuIcons}
            />
          ),
        }}
      />
      <Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name="pricetags-outline"
              size={size}
              color={focused ? colors.tabMenuIcons_active : colors.tabMenuIcons}
            />
          ),
        }}
      />
      <Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name="cart-outline"
              size={size}
              color={focused ? colors.tabMenuIcons_active : colors.tabMenuIcons}
            />
          ),
          tabBarBadge: 0,
          tabBarBadgeStyle: {
            backgroundColor: colors.tabMenuIcons_active,
          }
        }}
      />
    </Navigator>
  );
};

export default TabRoutes;
