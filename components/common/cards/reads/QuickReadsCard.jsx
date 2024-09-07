import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./quickreadscard.style";
import { images } from "../../../../constants";

const QuickReadsCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.coverContainer}>
        <Image
          source={item?.imgSrc || images.PLACEHOLDER}
          resizeMode="cover"
          style={styles.coverImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.bookName} numberOfLines={3}>
          {item?.title}
        </Text>

        <Text style={styles.bookAuthor}>By: {item?.author}</Text>
        <Text style={styles.bookAuthor}>Pages: {item?.pages}</Text>
        <Text style={styles.bookAuthor}>Language: {item?.language}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuickReadsCard;
