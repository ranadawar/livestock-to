import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import { AppForm, AppFormField, SubmitButton } from "../../../components/form";

import * as yup from "yup";
import { COLORS, FONTS } from "../../../constants/theme";

const initialValues = {
  storeName: "",
  storeAddress: "",
  storeContact: "",
  storeEmail: "",
};

const validationSchema = {
  storeName: yup.string().label("Store Name"),
  storeAddress: yup.string().label("Store Address"),
  storeContact: yup.string().label("Store Contact"),
  storeEmail: yup.string().label("Store Email"),
};

const FormProductStore = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <AppHeader isGoBack onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Farm Product Store</Text>
        <View style={styles.formContainer}>
          <AppForm
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={() => console.log("ghg")}
          >
            <AppFormField name="storeName" placeholder="Store Name" />
            <AppFormField name="storeAddress" placeholder="Store Address" />
            <AppFormField name="storeContact" placeholder="Store Contact" />
            <AppFormField name="storeEmail" placeholder="Store Email" />

            <View style={{ height: 20 }} />

            <SubmitButton title="Submit" />
          </AppForm>
        </View>
      </View>
    </AppScreen>
  );
};

export default FormProductStore;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontFamily: FONTS.bold,
    textAlign: "center",
    fontSize: 24,
    color: COLORS.primary,
  },
});
