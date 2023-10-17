import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const InboxCard = ({
  person = require("../../assets/images/vetdoc.jpg"),
  name = "Jonath",
  message = "I want to buy you milk",
  time = "1 Month Ago",
  messageImage = require("../../assets/images/vetdoc.jpg"),
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image source={person} resizeMode="cover" style={styles.personImage} />
      <View style={styles.middleContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View>
        <Image
          source={messageImage}
          resizeMode="cover"
          style={styles.messageImage}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InboxCard;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 12,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  personImage: {
    width: 60,
    height: 60,
  },
  messageImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  middleContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  message: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    marginTop: 5,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 18,
  },

  time: {
    fontFamily: FONTS.medium,
    fontSize: 11,
  },
  timeContainer: {
    backgroundColor: "#E9E9E9",
    position: "absolute",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    left: -90,
    padding: 3,
    borderRadius: 29,
  },
});
