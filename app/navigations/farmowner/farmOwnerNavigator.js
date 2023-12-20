import { StyleSheet, Text, Image } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FarmOwnerStackNavigator from "./farmOwnerStackNavigator";
import Insights from "../../screens/app/customer/Insights";

const Tab = createBottomTabNavigator();

const FarmOwnerNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" 
        component={FarmOwnerStackNavigator}
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

export default FarmOwnerNavigator;

const styles = StyleSheet.create({});
