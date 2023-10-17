import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AppForm,
  AppFormDropDown,
  AppFormField,
  SubmitButton,
} from "../../components/form/index";

import * as yup from "yup";
import AppScreen from "../../components/AppScreen";
import AppHeader from "../../components/AppHeader";
import { COLORS, FONTS } from "../../constants/theme";

const userType = [
  {
    id: 1,
    name: "Customer",
  },
  {
    id: 2,
    name: "Vet Doctor",
  },
  {
    id: 3,
    name: "Feed Store",
  },
  {
    id: 4,
    name: "Farm Owner",
  },
  {
    id: 5,
    name: "Medical Store",
  },
];

const initialValues = {
  name: "",
  email: "",
  cnic: "",
  accountType: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  fullName: yup.string().required().label("Full Name"),
  email: yup.string().required().label("Email"),
  cnic: yup.string().required().label("CNIC"),
  accountType: yup.object().required().label("Account Type"),
  password: yup.string().required().label("Password"),
  //confirm password must be same as password
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />
          <View style={styles.mainContainer}>
            <View style={styles.formContainer}>
              <AppForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => navigation.navigate("otp")}
              >
                <Text style={styles.phoneNumber}>Full Name</Text>
                <AppFormField
                  name="fullName"
                  placeholder="Olivia Price"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <Text style={styles.phoneNumber}>Email</Text>
                <AppFormField
                  name="email"
                  placeholder="olivia@gmail.com"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <Text style={styles.phoneNumber}>CNIC Number</Text>
                <AppFormField
                  name="cnic"
                  placeholder="12345-1234567-1"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <Text style={styles.phoneNumber}>Phone Number</Text>
                <AppFormField
                  name="phoneNumber"
                  placeholder="your password..."
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                />
                <Text style={styles.phoneNumber}>Account Type</Text>
                <AppFormDropDown
                  name="accountType"
                  data={userType}
                  placeholder="Select User Category"
                />
                <Text style={styles.phoneNumber}>Password</Text>
                <AppFormField
                  name="password"
                  placeholder="your password..."
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                />
                <Text style={styles.phoneNumber}>Confirm Password</Text>
                <AppFormField
                  name="confirmPassword"
                  placeholder="your password..."
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                />

                <View style={styles.submitBtn}>
                  <SubmitButton title="Continue" />
                </View>
              </AppForm>

              <View style={styles.absoluteContainer}>
                <Text
                  onPress={() => navigation.navigate("contact")}
                  style={styles.worker}
                >
                  Contact Us!
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default Register;

const styles = StyleSheet.create({
  absoluteContainer: {},
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
  innerContainer: {
    width: "50%",
    marginRight: 10,
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
  rowContainer: {
    flexDirection: "row",
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
