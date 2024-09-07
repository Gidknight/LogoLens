import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import Modal from "../components/home/modal/Modal";
import Explore from "../components/home/explore/Explore";

import { getRandom } from "../utils";
import MY_GARDEN from "../db/garden";
import MY_BOOKS from "../db/books";
import QuickRead from "../components/home/quickRead/QuickRead";
import { ScreenHeaderBtn } from "../components";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [exploreOptions, setExploreOptions] = useState([]);
  const [booksOptions, setBookOptions] = useState([]);
  const [model, setModel] = useState(null);

  const refetch = async () => {
    await loadModel();
  };

  useEffect(() => {
    const options = getRandom(5, MY_GARDEN.getAll());
    const books = getRandom(3, MY_BOOKS);
    setExploreOptions(options);
    setBookOptions(books);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
            color: COLORS.primary,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={images.logo} dimension="80%" />
          ),
          // headerRight: () => (
          //   <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          // ),
          headerTitle: "ETLeaves",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Modal />
          <Explore data={exploreOptions} />

          <QuickRead data={booksOptions} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
