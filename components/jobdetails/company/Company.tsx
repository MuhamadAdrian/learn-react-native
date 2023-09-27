import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./company.style";
import { Jobs } from "../../../types";
import { checkImageUrl } from "../../../utils";
import { icons } from "../../../constants";

type Props = {
  item: Jobs;
};
const Company = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageUrl(item?.employer_logo)
              ? item?.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{item?.job_title}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{item?.employer_name} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text>{item?.job_country}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
