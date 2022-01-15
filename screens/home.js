import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("ColorRainbow")}>
        <Text style={styles.text}>Click to view colors</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "lightblue",
    padding: 20,
    marginTop: 10,
    fontSize: 20,
    borderRadius: 40,
  },
});

export default Home;
