import { View, Text, TouchableOpacity } from "react-native";

import styles from "./about.style";
import { COLORS, FONT, SIZES } from "../../../constants";
import { useState } from "react";

const AboutPlant = ({ info }) => {
  const [isYoruba, setIsYoruba] = useState(true);
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: 10,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 10,
        }}
      >
        <TouchableOpacity onPress={() => setIsYoruba(false)}>
          <Text style={styles.langButton(!isYoruba)}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsYoruba(true)}>
          <Text style={styles.langButton(isYoruba)}>Yoruba</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.headText}>{isYoruba ? "Oruko" : "Name"}</Text>

          <Text style={styles.contextText}>
            {isYoruba ? info?.yoruba_name : info?.english_name}
          </Text>
        </View>

        <View>
          <Text style={styles.headText}>{isYoruba ? "Iwulo" : "Uses"}</Text>
          {isYoruba
            ? info?.yoruba_uses.map((item, index) => (
                <Text
                  key={index}
                  style={{
                    fontFamily: FONT.medium,
                    fontSize: SIZES.medium,
                    color: COLORS.gray,
                    textTransform: "capitalize",
                    paddingVertical: 5,
                  }}
                >
                  * {item}
                </Text>
              ))
            : info?.english_uses.map((item, index) => (
                <Text
                  key={index}
                  style={{
                    fontFamily: FONT.medium,
                    fontSize: SIZES.medium,
                    color: COLORS.gray,
                    textTransform: "capitalize",
                    paddingVertical: 5,
                  }}
                >
                  * {item}
                </Text>
              ))}
        </View>

        {/* <View style={styles.contentBox}></View> */}
        <View style={styles.contentBox}>
          {/* <Text style={styles.contextText}>Description</Text> */}
        </View>
      </View>
    </View>
  );
};

export default AboutPlant;
