import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Welcome" }} />

      <LinearGradient
        colors={["#e0f2fe", "#bfdbfe", "#93c5fd"]}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.Text
          entering={FadeInDown.delay(100)}
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#1e3a8a",
            marginBottom: 30,
          }}
        >
          Welcome 👋
        </Animated.Text>

        <Animated.View entering={FadeInDown.delay(300)}>
          <View
            style={{
              backgroundColor: "#3b82f6",
              paddingHorizontal: 30,
              paddingVertical: 12,
              borderRadius: 30,
            }}
          >
            <Animated.Text
              style={{ color: "white", fontWeight: "bold" }}
              onPress={() => router.push("/home")}
            >
              Get Started
            </Animated.Text>
          </View>
        </Animated.View>
      </LinearGradient>
    </>
  );
}
