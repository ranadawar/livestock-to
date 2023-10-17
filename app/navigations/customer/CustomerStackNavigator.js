import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/app/customer/Home";
import Scan from "../../screens/app/customer/Scan";
import Dairy from "../../screens/app/customer/Dairy";
import DairyListing from "../../screens/app/customer/DairyListing";
import ListingOwner from "../../screens/app/customer/ListingOwner";
import Feed from "../../screens/app/customer/Feed";
import FeedListings from "../../screens/app/customer/FeedListings";
import Vet from "../../screens/app/customer/Vet";
import VetChat from "../../screens/app/customer/VetChat";
import VetProfile from "../../screens/app/customer/VetProfile";
import Medical from "../../screens/app/customer/Medical";

const Stack = createNativeStackNavigator();

const CustomerStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="shome" component={Home} />
      <Stack.Screen name="sscan" component={Scan} />

      <Stack.Screen name="sdairy" component={Dairy} />
      <Stack.Screen name="sItemListings" component={DairyListing} />
      <Stack.Screen name="sListingOwner" component={ListingOwner} />

      <Stack.Screen name="sfeed" component={Feed} />
      <Stack.Screen name="sfeedlistings" component={FeedListings} />

      <Stack.Screen name="svet" component={Vet} />
      <Stack.Screen name="svetchat" component={VetChat} />
      <Stack.Screen name="svetprofile" component={VetProfile} />

      <Stack.Screen name="smedical" component={Medical} />
    </Stack.Navigator>
  );
};

export default CustomerStackNavigator;

const styles = StyleSheet.create({});
