import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const AppButton = ({ title = "Button", onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.mainContainer, style]} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginVertical: 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textStyle: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
});
