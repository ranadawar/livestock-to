import { StyleSheet, Image, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MedicalStackNavigator from "./MedicalStackNavigator";
import Insights from "../../screens/app/customer/Insights"; 

const Tab = createBottomTabNavigator();

const MedicalNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" 
      component={MedicalStackNavigator}
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

export default MedicalNavigator;

const styles = StyleSheet.create({});
