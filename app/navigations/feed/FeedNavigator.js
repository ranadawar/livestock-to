import { StyleSheet, Image, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedStackNavigator from "./FeedStackNavigor";
import Insights from "../../screens/app/customer/Insights";

const Tab = createBottomTabNavigator();

const FeedNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" 
      component={FeedStackNavigator} 
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
      <Tab.Screen name="Dashboard" 
        component={Insights}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              style={{ width: size, height: size }}
              source={
                focused
                  ? require("../../../assets/icons/dashboard-black.png")
                  : require("../../../assets/icons/dashboard.png")
              }
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default FeedNavigator;

const styles = StyleSheet.create({});
