import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ImageSourcePropType } from "react-native";
import styles from "./screenheader.style";

type Props = {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress?: () => void;
};

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={handlePress}
      activeOpacity={0.5}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension) as any}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
