import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MedicalStackNavigator from "./MedicalStackNavigator";

const Tab = createBottomTabNavigator();

const MedicalNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" component={MedicalStackNavigator} />
    </Tab.Navigator>
  );
};

export default MedicalNavigator;

const styles = StyleSheet.create({});
