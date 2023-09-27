import React from "react";
import { View, Text } from "react-native";
import styles from "./specifics.style";

type Props = {
  title: string;
  points: string[];
};
const Specifics = ({ title, points }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.pointsContainer}>
        {points.length === 0 ? (
          <Text style={{ ...styles.pointText, marginLeft: 0 }}>No Data</Text>
        ) : (
          points.map((point, index) => (
            <View style={styles.pointWrapper} key={point + index}>
              <Text style={styles.pointDot}></Text>
              <Text style={styles.pointText}>{point}</Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default Specifics;
