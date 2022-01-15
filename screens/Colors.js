import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Colors from "../components/colorBox";

const RAINBOW = [
  { colorName: "Red", hexCode: "#FF0000" },
  { colorName: "Orange", hexCode: "#FF7F00" },
  { colorName: "Yellow", hexCode: "#FFFF00" },
  { colorName: "Green", hexCode: "#00FF00" },
  { colorName: "Violet", hexCode: "#8B00FF" },
];

const ColorRainbow = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Route_Params", item)}>
      <FlatList
        style={styles.flat}
        data={RAINBOW}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <Colors name={item.colorName} hexCode={item.hexCode} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flat: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
  },
});
export default ColorRainbow;
