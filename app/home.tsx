import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Home() {
  const router = useRouter();

  const MenuButton = ({ title, delay, route }: any) => (
    <Animated.View entering={FadeInDown.delay(delay)}>
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.8)",
          padding: 18,
          borderRadius: 20,
          marginBottom: 15,
          width: 250,
          alignItems: "center",
        }}
      >
        <Animated.Text
          style={{
            color: "#1e3a8a",
            fontWeight: "bold",
            fontSize: 16,
          }}
          onPress={() => router.push(route)}
        >
          {title}
        </Animated.Text>
      </View>
    </Animated.View>
  );

  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />

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
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 25,
            color: "#1e3a8a",
          }}
        >
          Navigation
        </Animated.Text>

        <MenuButton title="Email Screen" delay={300} route="/email" />
        <MenuButton title="User List" delay={500} route="/userList" />
      </LinearGradient>
    </>
  );
}
