import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants/theme";

const ProfileCard = ({
  imagePerson ,
  name = "Jonath",
  memberSince = "November 2022",
  onPress,
  type
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Image
        source={imagePerson ? {uri :imagePerson} : type === "Doctor" ? require("../../assets/images/vetdoc.jpg") : require("../../assets/icons/farmer.png")}
        style={styles.profilePicture}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.memberSince}>{memberSince}</Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={35}
        color={COLORS.text}
      />
    </TouchableOpacity>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    marginBottom: 7,
  },
  memberSince: {
    color: COLORS.text,
    fontSize: 12,
    fontFamily: FONTS.regular,
  },
  textContainer: {
    flex: 1,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
});
