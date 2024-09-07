import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import styles from "./quickread.style";
import { COLORS } from "../../../constants";
import { QuickReadsCard } from "../..";

const QuickRead = ({ data }) => {
  const route = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const error = "";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quick Read</Text>
        <TouchableOpacity onPress={() => route.push("/myBooks")}>
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
            data.map((book, index) => (
              <QuickReadsCard
                key={index}
                item={book}
                handleNavigate={() => {
                  route.push(`book-details/${book?.id}`);
                }}
              />
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default QuickRead;
