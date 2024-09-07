import { useCallback, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  RefreshControl,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Stack,
  useGlobalSearchParams,
  useRouter,
  useSearchParams,
} from "expo-router";

import { COLORS, icons, images, SIZES } from "../../constants";
import { PDFReader } from "../../components";
import AboutPlant from "../../components/plantDetails/about/About";

import MY_BOOKS from "../../db/books";

const Details = () => {
  const router = useRouter();
  const params = useGlobalSearchParams();

  let result = MY_BOOKS.find((book) => book.id == params.id);
  // console.log(result);

  const [refreshing, setRefreshing] = useState(false);

  // const activeLang = useLangStore((state) => state.activeLang);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // refetch();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

          headerBackVisible: true,
          headerShadowVisible: false,
          headerTitle: "Details",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <PDFReader pdfPath={result.path} />
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default Details;
