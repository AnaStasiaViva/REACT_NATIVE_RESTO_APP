import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import SearchScreen from "../screens/SearchScreen";
import ResultsShowScreen from "../screens/ResultsShowScreen";

const Navigation = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
});

export default createAppContainer(Navigation);
