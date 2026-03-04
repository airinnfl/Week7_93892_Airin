import { Stack, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Email() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Email" }} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ marginBottom: 20 }}>Email Page</Text>

        <Button
          title="Go To Home Screen"
          onPress={() => router.push("/home")}
        />
      </View>
    </>
  );
}
