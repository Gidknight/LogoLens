import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES, images } from "../../../../constants";

const GardenCard = ({ item, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
    <View
      style={{
        flexDirection: "row",
        padding: SIZES.medium,
        width: "full",
        gap: 20,
        backgroundColor: COLORS.white,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: COLORS.gray,
        shadowOpacity: 50,
      }}
    >
      <Image
        source={item.imgSrc[0] || images.PLACEHOLDER}
        alt={`${item.yoruba_name}-image`}
        resizeMode="cover"
        style={{ borderRadius: 100, height: 50, width: 50 }}
      />
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            fontFamily: FONT.medium,
            fontSize: SIZES.medium,
          }}
        >
          {item.yoruba_name}
        </Text>
        
          <Text style={{ color: COLORS.gray, fontFamily: FONT.regular }}>
            {item.english_name}
          </Text>
      </View>
    </View>
        </TouchableOpacity>
  );
};

export default GardenCard;
