import { useRef, useState } from "react";
import { Animated, ScrollView, View } from "react-native";
import {
  Appbar,
  Avatar,
  Button,
  Card,
  FAB,
  IconButton,
  Searchbar,
  SegmentedButtons,
  Text,
} from "react-native-paper";
import userData from "./data.json";

type User = {
  name: string;
  email: string;
  photo_url: string;
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filter, setFilter] = useState("all");

  // 🔥 Animated value per user
  const scaleAnims = useRef<{ [key: string]: Animated.Value }>({}).current;

  const getScaleAnim = (name: string) => {
    if (!scaleAnims[name]) {
      scaleAnims[name] = new Animated.Value(1);
    }
    return scaleAnims[name];
  };

  const animateHeart = (name: string) => {
    const scale = getScaleAnim(name);

    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.4,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const toggleFavorite = (name: string) => {
    animateHeart(name);

    if (favorites.includes(name)) {
      setFavorites(favorites.filter((fav) => fav !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };

  const filteredUsers = (userData as User[])
    .filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((user) =>
      filter === "favorites" ? favorites.includes(user.name) : true,
    );

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="User Directory" />
      </Appbar.Header>

      <ScrollView style={{ padding: 15 }}>
        <Searchbar
          placeholder="Search user..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{ marginBottom: 15 }}
        />

        <SegmentedButtons
          value={filter}
          onValueChange={setFilter}
          buttons={[
            { value: "all", label: "All Users" },
            { value: "favorites", label: "Favorites" },
          ]}
          style={{ marginBottom: 15 }}
        />

        {filteredUsers.map((user, index) => {
          const scale = getScaleAnim(user.name);

          return (
            <Card
              key={index}
              style={{
                marginBottom: 15,
                borderRadius: 20,
              }}
              mode="elevated"
            >
              <Card.Content
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <Avatar.Image size={70} source={{ uri: user.photo_url }} />

                <View style={{ flex: 1 }}>
                  <Text variant="titleMedium">{user.name}</Text>
                  <Text variant="bodyMedium">{user.email}</Text>

                  <Button
                    mode="contained"
                    style={{ marginTop: 8 }}
                    onPress={() => alert(`Viewing ${user.name}`)}
                  >
                    View Profile
                  </Button>
                </View>

                <Animated.View style={{ transform: [{ scale }] }}>
                  <IconButton
                    icon={
                      favorites.includes(user.name) ? "heart" : "heart-outline"
                    }
                    iconColor={favorites.includes(user.name) ? "red" : "gray"}
                    onPress={() => toggleFavorite(user.name)}
                  />
                </Animated.View>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>

      <FAB
        icon="plus"
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        onPress={() => alert("Add new user")}
      />
    </>
  );
}
