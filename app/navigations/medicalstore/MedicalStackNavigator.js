import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/app/medicalstore/Home";
import SetStore from "../../screens/app/medicalstore/SetStore";
import AddProduct from "../../screens/app/medicalstore/AddProduct";
import AllProducts from "../../screens/app/medicalstore/AllProducts";

const Stack = createNativeStackNavigator();

const MedicalStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="shome" component={Home} />
      <Stack.Screen name="ssetstore" component={SetStore} />
      <Stack.Screen name="saddproduct" component={AddProduct} />
      <Stack.Screen name="sallproducts" component={AllProducts} />
    </Stack.Navigator>
  );
};

export default MedicalStackNavigator;

const styles = StyleSheet.create({});
