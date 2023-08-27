import React, { PropsWithChildren } from "react";
import { SafeAreaView, View } from "react-native";

interface ScreenContainerProps extends PropsWithChildren {
  justifyContent?: "justify-center" | "justify-start" | "justify-end";
  className?: string;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, justifyContent, className }) => {
  return (
    <SafeAreaView
      className={`flex-1 items-center bg-zinc-200 ${
        justifyContent ?? "justify-center"
      } ${className}`}
    >
      <View className="m-3">{children}</View>
    </SafeAreaView>
  );
};

export default ScreenContainer;
