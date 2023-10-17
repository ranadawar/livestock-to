import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS } from "../../constants/theme";

const CustomerHomeCard = ({
  source,
  mLeft,
  mRight,
  onPress,
  title = "Add User",
  style,
  imageStyle,
  marginVertical,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainContainer,
        {
          marginLeft: mLeft,
          marginRight: mRight,
          marginVertical: marginVertical ? 10 : 0,
        },
        style,
      ]}
    >
      <Image
        source={source}
        resizeMode="contain"
        style={[styles.image, imageStyle]}
      />
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomerHomeCard;

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
  },
  mainContainer: {
    alignItems: "center",
    flex: 1,
    height: 150,
    backgroundColor: COLORS.pureWhite,
    borderRadius: 10,
    justifyContent: "center",
    ...SHADOWS.medium,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    marginTop: 10,
  },
});
