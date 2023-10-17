import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedStackNavigator from "./FeedStackNavigor";

const Tab = createBottomTabNavigator();

const FeedNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" component={FeedStackNavigator} />
    </Tab.Navigator>
  );
};

export default FeedNavigator;

const styles = StyleSheet.create({});
