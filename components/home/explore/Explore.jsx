import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import styles from "./explore.style";
import { COLORS } from "../../../constants";
import { ExploreCard } from "../../";

const Explore = ({ data }) => {
  const route = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const error = "";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <TouchableOpacity onPress={() => route.push("/myGarden")}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            data.map((plant, index) => (
              <ExploreCard
                key={index}
                item={plant}
                handleNavigate={() => {
                  route.push(`plant-details/${plant?.id}`);
                }}
              />
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Explore;
