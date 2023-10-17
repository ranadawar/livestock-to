import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import { FONTS } from "../../../constants/theme";

import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../../../components/form";

const initialValues = {
  storeName: "",
  storeAddress: "",
  storeContact: "",
  storeEmail: "",
};

const validationSchema = Yup.object().shape({
  storeName: Yup.string().required().label("Store Name"),
  storeAddress: Yup.string().required().label("Store Address"),
  storeContact: Yup.string().required().label("Store Contact"),
  storeEmail: Yup.string().required().label("Store Email"),
});

const SetStore = ({ navigation }) => {
  return (
    <AppScreen>
      <AppHeader isGoBack onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Set Your Store</Text>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => console.log("sub")}
        >
          <AppFormField name="storeName" placeholder="Store Name" />
          <AppFormField name="storeAddress" placeholder="Store Address" />
          <AppFormField name="storeContact" placeholder="Store Contact" />
          <AppFormField name="storeEmail" placeholder="Store Email" />

          <View style={{ height: 50 }} />
          <SubmitButton title="Set Store" />
        </AppForm>
      </View>
    </AppScreen>
  );
};

export default SetStore;

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: FONTS.medium,
  },
});
