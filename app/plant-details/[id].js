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
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Modal,
  MyCamera,
} from "../../components";
import AboutPlant from "../../components/plantDetails/about/About";

import MY_GARDEN from "../../db/garden";

const Details = () => {
  const router = useRouter();
  const params = useGlobalSearchParams();

  let garden_plant = MY_GARDEN.getAll();
  let result = garden_plant.find((plant) => plant.id == params.id);
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
            backgroundColor: COLORS.primary,
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
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              source={
                (result?.imgSrc != null && result?.imgSrc[0]) ||
                images.PLACEHOLDER
              }
              resizeMode="cover"
              style={{ width: "100%", height: 400, padding: SIZES.large }}
            />
          </View>

          <AboutPlant info={result} />
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default Details;
