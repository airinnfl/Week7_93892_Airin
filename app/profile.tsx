import { LinearGradient } from "expo-linear-gradient";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Avatar } from "react-native-paper";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function Profile() {
  const router = useRouter();

  const { userName, email, photo } = useLocalSearchParams<any>();

  return (
    <>
      <Stack.Screen options={{ title: "Profile" }} />

      <LinearGradient
        colors={["#e0f2fe", "#bfdbfe", "#93c5fd"]}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Animated.View
          entering={FadeInUp.duration(500)}
          style={{
            backgroundColor: "rgba(255,255,255,0.85)",
            padding: 30,
            borderRadius: 30,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Avatar.Image
            size={130}
            source={{ uri: photo }}
            style={{
              borderWidth: 3,
              borderColor: "#3b82f6",
            }}
          />

          <Animated.Text
            entering={FadeInUp.delay(200)}
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 15,
              color: "#1e3a8a",
            }}
          >
            {userName}
          </Animated.Text>

          <Animated.Text
            entering={FadeInUp.delay(400)}
            style={{
              color: "#475569",
              marginTop: 5,
            }}
          >
            {email}
          </Animated.Text>

          <Animated.Text
            entering={FadeInUp.delay(600)}
            style={{
              marginTop: 20,
              backgroundColor: "#3b82f6",
              color: "white",
              paddingHorizontal: 25,
              paddingVertical: 10,
              borderRadius: 20,
            }}
            onPress={() => router.push("/home")}
          >
            Back Home
          </Animated.Text>
        </Animated.View>
      </LinearGradient>
    </>
  );
}
