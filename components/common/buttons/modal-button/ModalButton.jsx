import { Image, TouchableOpacity, Text } from "react-native";

import styles from "./modalButton.style";

const ModalButton = ({ iconUrl, dimension, handlePress, text }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ModalButton;
