import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Text } from "react-native-paper";
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

      {/* 🌈 Background Gradient */}
      <LinearGradient
        colors={["#e0f2fe", "#bfdbfe", "#93c5fd"]}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 20, paddingTop: 30 }}
        >
          {/* Title */}
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#1e3a8a",
              marginBottom: 20,
            }}
          >
            Users 👥
          </Text>

          {(userData as User[]).map((user, index) => (
            <Animated.View
              key={index}
              entering={FadeInDown.delay(index * 150).springify()}
            >
              <TouchableOpacity
                activeOpacity={0.85}
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
                {/* ✅ CARD TANPA ERROR */}
                <View
                  style={{
                    marginBottom: 18,
                    borderRadius: 25,
                    padding: 18,
                    backgroundColor: "rgba(255,255,255,0.85)", // glass effect aman
                    shadowColor: "#000",
                    shadowOpacity: 0.08,
                    shadowRadius: 12,
                    elevation: 6,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {/* Avatar */}
                    <View
                      style={{
                        borderRadius: 50,
                        borderWidth: 3,
                        borderColor: "#3b82f6",
                        padding: 2,
                      }}
                    >
                      <Avatar.Image
                        size={65}
                        source={{ uri: user.photo_url }}
                      />
                    </View>

                    {/* Text */}
                    <View style={{ marginLeft: 15, flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "#1e3a8a",
                        }}
                      >
                        {user.name}
                      </Text>

                      <Text
                        style={{
                          fontSize: 14,
                          color: "#475569",
                          marginTop: 3,
                        }}
                      >
                        {user.email}
                      </Text>
                    </View>

                    {/* Arrow */}
                    <Text
                      style={{
                        fontSize: 22,
                        color: "#3b82f6",
                        fontWeight: "bold",
                      }}
                    >
                      →
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </ScrollView>
      </LinearGradient>
    </>
  );
}
