import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { COLORS, SIZES, icons, images } from "../constants";
import { Stack, useRouter } from "expo-router";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      ></Stack.Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            search={search}
            setSearch={setSearch}
            handleClick={() => {
              if (search) router.push(`/search/${search}`);
            }}
          />

          <Popularjobs search={search} />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
