import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

const AppHeader = ({ isGoBack, onPress, isHideLogo }) => {
  return (
    <View style={styles.mainContainer}>
      {!isHideLogo && (
        <Image
          resizeMode="contain"
          source={require("../../assets/images/v1.png")}
          style={styles.image}
        />
      )}
      {isGoBack && (
        <TouchableOpacity onPress={onPress} style={styles.absoluteContainer}>
          <MaterialCommunityIcons
            name="chevron-left"
            color={COLORS.primary}
            size={36}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  absoluteContainer: {
    position: "absolute",
    left: 12,
  },
  mainContainer: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  image: {
    width: 150,
    height: 150,
  },
});
