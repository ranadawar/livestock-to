import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const InboxCard = ({
  person = require("../../assets/images/vetdoc.jpg"),
  name = "Jonath",
  message = "I want to buy you milk",
  messageImage = require("../../assets/images/vetdoc.jpg"),
  date,
  start,
  end,
  onPress,

}) => {
  
  console.log(name)
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress} >
      <Image source={person} resizeMode="cover" style={styles.personImage} />
      <View style={styles.middleContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View>
        
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{date.split(' ').slice(0, 4).join(' ')}</Text>
          <Text style={styles.time}>From {start}</Text>
          <Text style={styles.time}>Till {end}</Text>
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
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    left: -100,
    bottom:-30,
    padding: 3,
    borderRadius: 29,
  },
});
