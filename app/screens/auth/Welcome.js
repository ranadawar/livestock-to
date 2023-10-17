import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import { COLORS, FONTS } from "../../constants/theme";
import AppButton from "../../components/AppButton";

const Welcome = ({ navigation }) => {
  return (
    <AppScreen>
      <ImageBackground
        resizeMode="cover"
        source={require("../../../assets/images/d.jpg")}
        style={{ flex: 1 }}
        blurRadius={10}
      >
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <Image
              resizeMode="contain"
              source={require("../../../assets/images/v1.png")}
              style={styles.logo}
            />

            <Text style={styles.tagLine}>Welcome to Livestock Pro!</Text>
          </View>

          <View style={styles.btnContainer}>
            <AppButton
              title="Sign Up"
              onPress={() => navigation.navigate("register")}
            />
            <AppButton
              title="Login"
              style={{ backgroundColor: COLORS.white }}
              textStyle={{ color: COLORS.primary }}
              onPress={() => navigation.navigate("login")}
            />
          </View>
        </View>
      </ImageBackground>
    </AppScreen>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  btnContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 35,
  },
  logo: {
    width: 175,
    height: 175,
    borderRadius: 87.5,
  },

  mainContainer: {
    flex: 1,
  },

  someText: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.bold,
    marginVertical: 10,
  },
  someText2: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.bold,
    textDecorationLine: "underline",
  },
  tagLine: {
    fontSize: 25,
    fontFamily: FONTS.mediumItalic,
    textAlign: "center",
    marginTop: 20,
    color: COLORS.primary,
  },

  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
  },
});
