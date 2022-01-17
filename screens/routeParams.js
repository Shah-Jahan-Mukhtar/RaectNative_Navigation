import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Colors from "../components/colorBox";

const Route_Params = ({ route }) => {
  const { colorName, hexCode, item } = route.params;
  return (
    <FlatList
      data={item}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <Colors name={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text>{colorName}</Text>}
    />
  );
};

export default Route_Params;
