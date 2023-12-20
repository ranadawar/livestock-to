import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthNavigator from "./app/navigations/AuthNavigator";
import { useFonts } from "expo-font";
import CustomerNavigator from "./app/navigations/customer/CustomerNavigator";
import MedicalNavigator from "./app/navigations/medicalstore/MedicalNavigator";
import FeedNavigator from "./app/navigations/feed/FeedNavigator";
import FarmOwnerNavigator from "./app/navigations/farmowner/farmOwnerNavigator";
import VeterinaryNavigator from "./app/navigations/veterinaryDoctor/veterinaryNavigator";
import * as SecureStore from 'expo-secure-store';

const AuthContext = React.createContext();

export default function App() {


  const initialState = {
    type: '' // Set a default value or appropriate initial state
  };
  
  const reducer = (state, action) => {
    return {
      type: action.type
    };
  };
  
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const storedValueString = await SecureStore.removeItemAsync("data");
        const value = JSON.parse(storedValueString || '{}'); // Ensure value is initialized
        (value);
        dispatch({ type: value.type || '' }); // Provide a default value if type is not present
      } catch (e) {
        // Handle error
      }
    };
    bootstrapAsync();
  }, []);

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

    <AuthContext.Provider value={{}} >
      <NavigationContainer>
        <StatusBar style="auto" />
        
        {/* {state.type === "Farm Owner" ? (
          <FormOwnerNavigator />
        ) : state.type === "Customer" ? (
          <CustomerNavigator />
        ) : state.type === "Medical Store" ? (
          <MedicalNavigator />
        ) : state.type === "Feed Store" ? (
          <FeedNavigator /> 
        ) :
        ( <AuthNavigator /> )
        } */}
        
        {/* <AuthNavigator />  */}


        {/* <FarmOwnerNavigator /> */}
        {/* <CustomerNavigator /> */}
        <VeterinaryNavigator />
        {/* <MedicalNavigator /> */}
        {/* <FeedNavigator />  */}
      </NavigationContainer>
    </AuthContext.Provider>
  
  );
}
