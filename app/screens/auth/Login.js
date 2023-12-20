import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import AppScreen from "../../components/AppScreen";
import AppHeader from "../../components/AppHeader";
import { COLORS, FONTS } from "../../constants/theme";
import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "../../components/form/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import {auth} from "../../../firebase"
import * as yup from "yup";
import * as SecureStore from 'expo-secure-store';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState('')

  const initialValues = { email: email, password: pass };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required().label("Valet Company"),
    password: yup.string().required().label("Password"),
  });

  const loginuser = () => {
    ('Data',initialValues)

    signInWithEmailAndPassword(auth, email, pass).
      then(async (res) => {

        const dataRef = ref(getDatabase(), `/users/${res['user'].uid}`); // Path to the specific user's data
        
        // Retrieve data from the specified path
        const snapshot = await get(dataRef);
      
        if (snapshot.exists()) {
          // Data exists at the specified path
          const userData = snapshot.val();

          const value = JSON.stringify({"type": userData.accountType, "uid": res['user']['uid']})
          await SecureStore.setItemAsync("data", value);

          if (userData.accountType === "Customer"){}
          else if (userData.accountType === "Customer"){}
          else if (userData.accountType === "Customer"){}
          else if (userData.accountType === "Customer"){}

          // navigation.navigate("shome");

          return userData;
        } else {
          // No data exists at the specified path
          ("No data found");
          return null;
        }        
      }).
      catch((error) => {
        (error)
      })
  }

  return (
    <AppScreen>
      <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        <View style={styles.formContainer}>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={(values) => navigation.navigate("wapp")}
          >
            <Text style={styles.phoneNumber}>Login </Text>
            <AppFormField
              name="email"
              placeholder="ahsan@gmail.com"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText = {setEmail}
            />
            <Text style={styles.phoneNumber}>Password</Text>

            <AppFormField
              name="password"
              placeholder="your password..."
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onChangeText = {setPassword}
            />

            <View style={styles.submitBtn}>
              <SubmitButton title="Login" onPress={loginuser} />
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
    </AppScreen>
  );
};

export default LoginScreen;

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
