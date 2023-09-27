import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { Jobs } from "../../../../types";
import { checkImageUrl } from "../../../../utils";

type Props = {
  item: Jobs;
  selectedTab: string;
  handleCardPress: (item?: Jobs) => any;
};

const PopularJobCard = ({ item, selectedTab, handleCardPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedTab, item) as any}
      onPress={() => handleCardPress(item)}
      activeOpacity={0.8}
    >
      <TouchableOpacity
        style={styles.logoContainer(selectedTab, item) as any}
        activeOpacity={0.8}
      >
        <Image
          source={{
            uri: checkImageUrl(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedTab, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
