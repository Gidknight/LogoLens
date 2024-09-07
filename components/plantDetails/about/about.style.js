import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    marginTop: 0,
  },
  headText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontFamily: FONT.bold,
    marginVertical: SIZES.small / 1.25,
    textTransform: "capitalize",
  },
  langButton: (isYoruba = true) => ({
    padding: SIZES.xSmall,
    borderRadius: SIZES.medium,
    borderColor: COLORS.primary,
    borderWidth: 1,
    color: isYoruba ? COLORS.lightWhite : COLORS.primary,
    backgroundColor: isYoruba ? COLORS.primary : "transparent",
  }),
});

export default styles;
