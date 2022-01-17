import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Home from "./screens/Home";
import ColorRainbow from "./screens/Colors";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Route_Params from "./screens/RouteParams";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorRainbow" component={ColorRainbow} />
        <Stack.Screen name="RouteParams" component={Route_Params} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  flat: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
  },
});

export default App;
