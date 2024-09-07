import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./bookcard.style";
import { images } from "../../../../constants";

const BookCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity
      onPress={handleNavigate}
      style={styles.container(item?.id, item)}
    >
      {/* <View> */}
      <Image
        source={item?.imgSrc || images.PLACEHOLDER}
        resizeMode="contain"
        style={styles.imageContainer(item?.id, item)}
      />
      <Text style={styles.plantName} numberOfLines={3}>
        {item?.title}
      </Text>
      {/* </View> */}
      <Text style={styles.yorubaName}>{item?.author}</Text>
    </TouchableOpacity>
  );
};

export default BookCard;
