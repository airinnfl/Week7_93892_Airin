import { Stack, useRouter } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import Animated, { FadeInDown } from "react-native-reanimated";
import userData from "./data.json";

type User = {
  name: string;
  email: string;
  photo_url: string;
};

export default function UserList() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "User List" }} />
      <ScrollView style={{ padding: 15 }}>
        {(userData as User[]).map((user, index) => (
          <Animated.View
            key={index}
            entering={FadeInDown.delay(index * 300).duration(500)}
          >
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/profile",
                  params: {
                    userName: user.name,
                    email: user.email,
                    photo: user.photo_url,
                  },
                })
              }
            >
              <Card style={{ marginBottom: 15 }}>
                <Card.Content
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar.Image size={60} source={{ uri: user.photo_url }} />
                  <View style={{ marginLeft: 15 }}>
                    <Text variant="titleMedium">{user.name}</Text>
                    <Text variant="bodyMedium">{user.email}</Text>
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </>
  );
}
