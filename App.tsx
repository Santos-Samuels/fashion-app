import { SafeAreaView } from "react-native";
import { ProductsScreen } from "./src/screens";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-200">
      <ProductsScreen />
    </SafeAreaView>
  );
}
