import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormProductStore from "../../screens/app/farmowner/FormProductStore";
import Home from "../../screens/app/farmowner/Home";
import StoreProducts from "../../screens/app/farmowner/StoreProducts";
import StoreProductTwo from "../../screens/app/farmowner/StoreProductTwo";

const Stack = createNativeStackNavigator();

const FormOwnerStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="shome" component={Home} />
      <Stack.Screen name="ssetproductstore" component={FormProductStore} />
      <Stack.Screen name="sstoreproducts" component={StoreProducts} />
      <Stack.Screen name="sItemListings" component={StoreProductTwo} />
    </Stack.Navigator>
  );
};

export default FormOwnerStackNavigator;

const styles = StyleSheet.create({});
