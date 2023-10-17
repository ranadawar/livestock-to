import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Welcome from "../screens/auth/Welcome";
import ContactUs from "../screens/auth/ContactUs";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="contact" component={ContactUs} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
