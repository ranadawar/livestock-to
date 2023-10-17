import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FormOwnerStackNavigator from "./FormOwnerStackNavigator";

const Tab = createBottomTabNavigator();

const FormOwnerNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" component={FormOwnerStackNavigator} />
    </Tab.Navigator>
  );
};

export default FormOwnerNavigator;

const styles = StyleSheet.create({});
