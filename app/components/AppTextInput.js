import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

const AppTextInput = ({
  icon,
  placeholder = "email",
  iconColor = COLORS.primary,
  color = COLORS.white,
  value,
  searchBtn,
  onChangeText,
  width,
  onPressIcon,
  searchIcon = "magnify",
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { backgroundColor: color, width: width }]}>
      {icon && (
        <MaterialCommunityIcons name={icon} color={iconColor} size={25} />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.placeholder}
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        {...otherProps}
      />
      {searchBtn && (
        <MaterialCommunityIcons
          name={searchIcon}
          color={COLORS.secondarydark}
          size={25}
          onPress={onPressIcon}
        />
      )}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  input: {
    paddingVertical: Platform.OS === "ios" ? 15 : 8,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    flex: 1,
  },
});
