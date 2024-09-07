import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 80,
    height: 80,
    // backgroundColor: COLORS.white,
    flexDirection: "column",
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  btnText: {
    color: COLORS.white,
    width: "100%",
    textAlign: "center",
  },
});

export default styles;
