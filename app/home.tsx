import { Stack, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

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
        <Text style={{ marginBottom: 20 }}>Navigation List</Text>

        <Button
          title="Go To Email Screen"
          onPress={() => router.push("/email")}
        />

        <View style={{ height: 10 }} />

        <Button
          title="Go To User List Page"
          onPress={() => router.push("/userList")}
        />
      </View>
    </>
  );
}
