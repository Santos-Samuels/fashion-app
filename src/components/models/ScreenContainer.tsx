import React, { PropsWithChildren } from "react";
import { SafeAreaView, Text, View } from "react-native";

const ScreenContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-200">
      <View className="m-3">
        {children}
        <Text>Here comes tab navigation</Text>
      </View>
    </SafeAreaView>
  );
};

export default ScreenContainer;
