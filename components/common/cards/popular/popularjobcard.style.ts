import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";
import { Jobs } from "../../../../types";

const styles = StyleSheet.create({
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

const dynamicStyles = {
  container: (selectedJob: string, item: Jobs) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-around",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    // transitionProperty: "backgroundColor",
    // transitionTimingFunction: "ease",
    // transitionDuration: "2s",
  }),
  logoContainer: (selectedJob: string, item: Jobs) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#493878" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  publisher: (selectedJob: string, item: Jobs) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  jobName: (selectedJob: string, item: Jobs) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
};

export default { ...styles, ...dynamicStyles };
