import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/app/farmowner/Home";
import SetOwner from "../../screens/app/farmowner/SetOwner";
import AllRequests from "../../screens/app/farmowner/AllRequests";
import AddProduct from "../../screens/app/farmowner/AddProduct";
import SetStore from "../../screens/app/farmowner/SetStore";
import AllProducts from "../../screens/app/farmowner/VerifyProduct";

const Stack = createNativeStackNavigator();

const FarmOwnerStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="shome" component={Home} />
      <Stack.Screen name="ssetowner" component={SetOwner} />
      <Stack.Screen name="ssetstore" component={SetStore} />
      <Stack.Screen name="saddproduct" component={AddProduct} />
      <Stack.Screen name="sallproducts" component={AllRequests} />
      <Stack.Screen name="sallproductsverify" component={AllProducts} />
    </Stack.Navigator>
  );
};

export default FarmOwnerStackNavigator;

const styles = StyleSheet.create({});
