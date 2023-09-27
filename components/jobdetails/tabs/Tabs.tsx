import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./tabs.style";
import { SIZES } from "../../../constants";

type Props = {
  tabs: Array<string>;
  activeTab: string;
  setActiveTab: (params: string) => void;
};

type TabButtonProps = {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
};

const TabButton = ({ name, activeTab, onHandleSearchType }: TabButtonProps) => (
  <TouchableOpacity
    style={styles.btn(name, activeTab) as any}
    onPress={onHandleSearchType}
    activeOpacity={0.6}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activeTab, setActiveTab }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          columnGap: SIZES.small / 2,
        }}
      />
    </View>
  );
};

export default Tabs;
