import AppRoutes from "@src/routes/app.routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex-1">
        <StatusBar style="auto" />
        <AppRoutes />
      </View>
    </QueryClientProvider>
  );
}
