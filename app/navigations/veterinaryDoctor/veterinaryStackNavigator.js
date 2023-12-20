import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/app/vet/Home";
import SetDoctor from "../../screens/app/vet/SetDoctor";
import AllRequests from "../../screens/app/vet/AllRequests";

const Stack = createNativeStackNavigator();

const VeterinaryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="shome" component={Home} />
      <Stack.Screen name="ssetstore" component={SetDoctor} />
      <Stack.Screen name="sallproducts" component={AllRequests} />
    </Stack.Navigator>
  );
};

export default VeterinaryStackNavigator;

const styles = StyleSheet.create({});
