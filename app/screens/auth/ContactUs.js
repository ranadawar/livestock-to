import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import AppHeader from "../../components/AppHeader";
import { COLORS, FONTS } from "../../constants/theme";
import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "../../components/form/index";

import * as yup from "yup";

const initialValues = { title: "", message: "" };

const validationSchema = yup.object().shape({
  title: yup.string().email().required().label("Valet Company"),
  message: yup.string().required().label("Password"),
});

const LoginScreen = ({ navigation }) => {
  return (
    <AppScreen>
      <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        <View style={styles.formContainer}>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => navigation.navigate("wapp")}
          >
            <Text style={styles.phoneNumber}>Title </Text>
            <AppFormField
              name="email"
              placeholder="ahsan@gmail.com"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text style={styles.phoneNumber}>Message</Text>

            <AppFormField
              name="password"
              placeholder="your password..."
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
            />

            <View style={styles.submitBtn}>
              <SubmitButton title="Send Email" />
            </View>
          </AppForm>
        </View>
      </View>
    </AppScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  dontHaveAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  forgotPassword: {
    textAlign: "right",
    fontFamily: FONTS.mediumItalic,
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
  formContainer: {
    flex: 1,
  },
  leftText: {
    fontFamily: FONTS.mediumItalic,
    color: COLORS.primary,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 87.5,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 35,
  },
  phoneNumber: {
    fontFamily: FONTS.medium,
    fontSize: 16,
  },

  submitBtn: {
    marginTop: 10,
  },
  textLogin: {
    fontSize: 20,
    fontFamily: FONTS.mediumItalic,
    marginTop: 20,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  worker: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    marginTop: 10,
  },
});
