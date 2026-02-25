import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from "react-native-paper";

export default function RootLayout() {
  const [isDark] = useState(false);

  const customLightTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: "#A67C52", // brown soft accent
      secondary: "#D4A373", // warm pastel
      background: "#FFF8E7", // 🤍 cream pastel
      surface: "#FFFFFF",
    },
  };

  const customDarkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: "#D4A373",
      background: "#1E1E1E",
    },
  };

  return (
    <PaperProvider theme={isDark ? customDarkTheme : customLightTheme}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: isDark ? "#1E1E1E" : "#FFF8E7",
          },
        }}
      />
    </PaperProvider>
  );
}
