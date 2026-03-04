import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Button, View } from "react-native";
import { Avatar, Text } from "react-native-paper";

export default function Profile() {
  const router = useRouter();
  const { userName, email, photo } = useLocalSearchParams<{
    userName: string;
    email: string;
    photo: string;
  }>();

  return (
    <>
      <Stack.Screen options={{ title: "Profile" }} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar.Image size={120} source={{ uri: photo }} />
        <Text variant="titleLarge" style={{ marginTop: 15 }}>
          {userName}
        </Text>
        <Text variant="bodyLarge">{email}</Text>

        <View style={{ marginTop: 20 }}>
          <Button
            title="Go To Home Screen"
            onPress={() => router.push("/home")}
          />
        </View>
      </View>
    </>
  );
}
