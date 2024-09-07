import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedPlant, item) => ({
    // width: 250,
    // width: "100%",
    padding: SIZES.large,
    // backgroundColor: selectedPlant === item.id ? COLORS.primary : "#FFF",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  imageContainer: (selectedPlant, item) => ({
    width: 150,
    height: 200,
    backgroundColor: selectedPlant === item.id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "flex-start",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  plantName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginTop: SIZES.small / 1.5,
    textTransform: "capitalize",
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  yorubaName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
});

export default styles;
