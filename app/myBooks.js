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
import MY_BOOKS from "../db/books";
import GardenCard from "../components/common/cards/garden/GardenCard";
import BookCard from "../components/common/cards/book/BookCard";

const Shelf = () => {
  const route = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [exploreOptions, setExploreOptions] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.book,
            color: COLORS.lightWhite,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: COLORS.lightWhite,
          },
          headerTintColor: COLORS.lightWhite,
          headerShadowVisible: true,
          headerBackVisible: true,
          // headerLeft: () => (
          //   <ScreenHeaderBtn
          //     iconUrl={icons.home}
          //     dimension="60%"
          //     handlePress={() => route.push("/home")}
          //   />
          // ),
          // headerRight: () => (
          //   <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          // ),
          headerTitle: "My Books",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Text>Total Books: {MY_BOOKS.length}</Text>
        </View>
        {/* <FlatList
          data={MY_GARDEN.getAll()}
          renderItem={GardenCard}
          keyExtractor={(item) => item.id}
        /> */}

        <View
          style={{
            flexDirection: "column",

            flexWrap: "nowrap",
          }}
        >
          {/* {MY_GARDEN.getAll().map((plant) => (
            <GardenCard
              item={plant}
              onClick={() => route.push(`plant-details/${plant?.id}`)}
              key={plant.id}
            />
          ))} */}
          {MY_BOOKS.map((book) => (
            <BookCard
              key={book.id}
              item={book}
              handleNavigate={() => route.push(`/book-details/${book.id}`)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shelf;
