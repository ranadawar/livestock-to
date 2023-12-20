import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const DairyListingCard = ({
  image = require("../../../assets/icons/milk.png"),
  price,
  title,
  owner = "Ahsan Dairy",
  hide,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Image resizeMode="contain" style={styles.image} source={image} />
      <View style={styles.middleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        {/* <View style={styles.ownerContainer}>
          <Text style={styles.normal}>Listed By:</Text>
          <Text
            onPress={() => navigation.navigte("sListingOwner")}
            style={styles.green}
          >
            {owner}
          </Text>
        </View> */}
      </View>
      {!hide && (
        <TouchableOpacity style={styles.buyNow}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DairyListingCard;

const styles = StyleSheet.create({
  ownerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    maxWidth: 120,
  },
  green: {
    fontFamily: FONTS.bold,
    textDecorationLine: "underline",
    color: COLORS.primary,
    marginLeft: 5,
  },
  normal: {
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  image: {
    height: 100,
    width: 80,
    borderRadius: 10,
  },
  mainContainer: {
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: COLORS.pureWhite,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
  },
  middleContainer: {
    marginLeft: 20,
  },
  price: {
    fontFamily: FONTS.medium,
    marginTop: 5,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 16,
  },

  buyNow: {
    flex: 1,

    marginRight: 15,
    backgroundColor: COLORS.primary,
    maxWidth: 100,
    marginLeft: 55,
    padding: 12,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buyText: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
  },
});
