import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Dimensions, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  const router = useRouter();

  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get("window");
      setIsPortrait(width < height);
    };

    updateOrientation();

    const subscription = Dimensions.addEventListener(
      "change",
      updateOrientation,
    );

    return () => subscription?.remove();
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: "Welcome" }} />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: isPortrait ? 20 : 50,
        }}
      >
        {/* Title */}
        <Animated.Text
          entering={FadeInDown.delay(100).duration(500)}
          style={{ fontSize: 22, marginBottom: 30 }}
        >
          Welcome 👋
        </Animated.Text>

        {/* Button */}
        <Animated.View entering={FadeInDown.delay(400)}>
          <Button
            title="GO TO NAVIGATION LIST"
            onPress={() => router.push("/home")}
          />
        </Animated.View>
      </View>
    </>
  );
}
