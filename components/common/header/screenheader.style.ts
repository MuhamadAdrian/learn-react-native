import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

type Styles = {
  btnContainer: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

const dynamicStyles = {
  btnImg: (dimension: string) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
};
export default { ...styles, ...dynamicStyles };
