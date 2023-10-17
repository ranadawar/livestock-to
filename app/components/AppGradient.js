import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/theme";

const AppGradient = ({
  primary = COLORS.secondary,
  secondary = COLORS.primary,
  style,
}) => {
  return (
    <LinearGradient
      style={[styles.absolute, style]}
      colors={[primary, secondary]}
    />
  );
};

export default AppGradient;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
});
