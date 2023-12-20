import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/app/feedstore/Home";
import SetStore from "../../screens/app/feedstore/SetStore";
import AddProduct from "../../screens/app/feedstore/AddProduct";
import AllProducts from "../../screens/app/feedstore/AllProducts";
import AllProductsVerify from "../../screens/app/feedstore/VerifyProduct";

const Stack = createNativeStackNavigator();

const FeedStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="shome" component={Home} />
      <Stack.Screen name="ssetstore" component={SetStore} />
      <Stack.Screen name="saddproduct" component={AddProduct} />
      <Stack.Screen name="sallproduct" component={AllProducts} />
      <Stack.Screen name="sallproductsverify" component={AllProductsVerify} />
    </Stack.Navigator>
  );
};

export default FeedStackNavigator;
