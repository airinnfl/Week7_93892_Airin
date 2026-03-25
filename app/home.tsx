import { Stack, useRouter } from "expo-router";
import { Button, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Title */}
        <Animated.Text
          entering={FadeInDown.delay(100).duration(500)}
          style={{ marginBottom: 20, fontSize: 18 }}
        >
          Navigation List
        </Animated.Text>

        {/* Button 1 */}
        <Animated.View entering={FadeInDown.delay(300)}>
          <Button
            title="Go To Email Screen"
            onPress={() => router.push("/email")}
          />
        </Animated.View>

        <View style={{ height: 10 }} />

        {/* Button 2 */}
        <Animated.View entering={FadeInDown.delay(600)}>
          <Button
            title="Go To User List Page"
            onPress={() => router.push("/userList")}
          />
        </Animated.View>
      </View>
    </>
  );
}
