import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";

const AppScreen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.mainContainer, style]}>
      {children}
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
