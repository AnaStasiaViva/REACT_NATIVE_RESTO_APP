import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import SearchScreen from "../screens/SearchScreen";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View style={{ flex: 1 }}>
      <SearchScreen navigation={props.navigation} />
    </View>
  );
};

export default HomeScreen;
