import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FONTS } from "../../constants/theme";

const VetContactCard = ({
  source = require("../../../assets/icons/phone.png"),
  title = "Call Veterinary Doctor",
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Image source={source} style={styles.image} resizeMode="contain" />
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default VetContactCard;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.medium,
    marginLeft: 20,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
