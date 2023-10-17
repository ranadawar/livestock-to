import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthNavigator from "./app/navigations/AuthNavigator";
import { useFonts } from "expo-font";
import CustomerNavigator from "./app/navigations/customer/CustomerNavigator";
import MedicalNavigator from "./app/navigations/medicalstore/MedicalNavigator";
import FeedNavigator from "./app/navigations/feed/FeedNavigator";
import FormOwnerNavigator from "./app/navigations/formowner/FormOwnerNavigator";

export default function App() {
  const user = "customer";
  const [fontsLoaded] = useFonts({
    EncodeSansBold: require("./assets/fonts/Poppins-Bold.ttf"),
    EncodeSansBoldItalic: require("./assets/fonts/Poppins-BoldItalic.ttf"),
    EncodeSansSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    EncodeSansSemiBoldItalic: require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
    EncodeSansMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    EncodeSansMediumItalic: require("./assets/fonts/Poppins-MediumItalic.ttf"),
    EncodeSansRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    EncodeSansRegularItalic: require("./assets/fonts/Poppins-Italic.ttf"),
    EncodeSansLight: require("./assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <AuthNavigator /> */}
      {/* <CustomerNavigator /> */}
      <MedicalNavigator />
      {/* <FeedNavigator /> */}
      {/* <FormOwnerNavigator /> */}
    </NavigationContainer>
  );
}
