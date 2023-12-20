import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/app/customer/Home";
import CustomerStackNavigator from "./CustomerStackNavigator";
import MessagesScreen from "../../screens/app/customer/MessagesScreen";
import MessagesScreenBot from "../../screens/app/customer/MessagesScreenBot";
import Insights from "../../screens/app/customer/Insights";
import Cart from "../../screens/app/customer/Cart"

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
      <Tab.Screen name="Inbox" 
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              style={{ width: size, height: size }}
              source={
                focused
                  ? require("../../../assets/icons/emailBlack.png")
                  : require("../../../assets/icons/email.png")
              }
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen name="CatBot" 
        component={MessagesScreenBot}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              style={{ width: size, height: size }}
              source={
                focused
                  ? require("../../../assets/icons/botBlack.png")
                  : require("../../../assets/icons/bot.png")
              }
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* <Tab.Screen name="Dashboard" 
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
      <Tab.Screen name="Cart" 
        component={Cart}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              style={{ width: size, height: size }}
              source={
                focused
                  ? require("../../../assets/icons/add-cart.png")
                  : require("../../../assets/icons/add-cart.png")
              }
              resizeMode="contain"
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default CustomerNavigator;

const styles = StyleSheet.create({});
