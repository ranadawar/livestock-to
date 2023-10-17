import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/app/customer/Home";
import CustomerStackNavigator from "./CustomerStackNavigator";
import MessagesScreen from "../../screens/app/customer/MessagesScreen";

const Tab = createBottomTabNavigator();

const CustomerNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          display: "none",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={CustomerStackNavigator}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              style={{ width: size, height: size }}
              source={
                focused
                  ? require("../../../assets/icons/homec.png")
                  : require("../../../assets/icons/home.png")
              }
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen name="Inbox" component={MessagesScreen} />
    </Tab.Navigator>
  );
};

export default CustomerNavigator;

const styles = StyleSheet.create({});
