import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./explorecard.style";
import { images } from "../../../../constants";

const ExploreCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity
      onPress={handleNavigate}
      style={styles.container(item?.id, item)}
    >
      {/* <View> */}
      <Image
        source={item?.imgSrc[0] || images.PLACEHOLDER}
        resizeMode="cover"
        style={styles.imageContainer(item?.id, item)}
      />
      <Text style={styles.plantName}>{item?.yoruba_name}</Text>
      {/* </View> */}
      <Text style={styles.yorubaName}>{item?.english_name}</Text>
    </TouchableOpacity>
  );
};

export default ExploreCard;
