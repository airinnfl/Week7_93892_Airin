import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function Email() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Email" }} />

      {/* 🌈 Gradient Background */}
      <LinearGradient
        colors={["#e0f2fe", "#bfdbfe", "#93c5fd"]}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        {/* 📧 Card */}
        <Animated.View
          entering={FadeInUp.duration(500)}
          style={{
            backgroundColor: "rgba(255,255,255,0.85)",
            padding: 25,
            borderRadius: 25,
            width: "100%",
            alignItems: "center",
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 12,
            elevation: 6,
          }}
        >
          {/* Title */}
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#1e3a8a",
              marginBottom: 15,
            }}
          >
            📧 Contact Email
          </Text>

          {/* Email */}
          <Animated.Text
            entering={FadeInUp.delay(200)}
            style={{
              fontSize: 16,
              color: "#475569",
              marginBottom: 20,
            }}
          >
            airin@example.com
          </Animated.Text>

          {/* Button */}
          <Animated.View entering={FadeInUp.delay(400)}>
            <TouchableOpacity
              onPress={() => router.push("/home")}
              style={{
                backgroundColor: "#3b82f6",
                paddingHorizontal: 25,
                paddingVertical: 10,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Back to Home
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </LinearGradient>
    </>
  );
}
