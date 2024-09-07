import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, SIZES } from "../constants";
import { PopularPlant, Explore, Modal, ScreenHeaderBtn } from "../components";
import MY_GARDEN from "../db/garden";
import GardenCard from "../components/common/cards/garden/GardenCard";

const GARDEN = () => {
  const route = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
            color: COLORS.lightWhite,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: COLORS.lightWhite,
          },
          headerTintColor: COLORS.lightWhite,
          headerShadowVisible: true,
          headerBackVisible: true,
          // headerRight: () => (
          //   <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          // ),
          headerTitle: "My Garden",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Text>Total Plants: {MY_GARDEN.getTotal()}</Text>
        </View>
        {/* <FlatList
          data={MY_GARDEN.getAll()}
          renderItem={GardenCard}
          keyExtractor={(item) => item.id}
        /> */}

        <View
          style={{ flexDirection: "column", paddingHorizontal: SIZES.medium }}
        >
          {MY_GARDEN.getAll().map((plant) => (
            <GardenCard
              item={plant}
              onClick={() => route.push(`plant-details/${plant?.id}`)}
              key={plant.id}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GARDEN;
