import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import * as yup from "yup";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import FormImagePicker from "../../../components/form/FormImagePicker";
import { AppForm, AppFormField, SubmitButton } from "../../../components/form";
import { FONTS } from "../../../constants/theme";

const initialValues = {
  name: "",
  description: "",
  price: "",
  quantity: "",
  images: [],
  category: "",
  subCategory: "",
  brand: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().required().min(1).label("Name"),
  description: yup.string().required().min(1).label("Description"),
  price: yup.number().required().min(1).label("Price"),
  quantity: yup.number().required().min(1).label("Quantity"),
  images: yup.array().min(1, "Please select at least one image"),
  category: yup.object().required().nullable().label("Category"),
  subCategory: yup.object().required().nullable().label("Sub Category"),
  brand: yup.object().required().nullable().label("Brand"),
});

const AddProduct = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppHeader isGoBack onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Add Product</Text>
          <View style={styles.formContainer}>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={() => console.log("sub")}
            >
              <FormImagePicker name="images" />
              <AppFormField name="name" placeholder="Name" />
              <AppFormField name="description" placeholder="Description" />
              <AppFormField name="price" placeholder="Price" />
              <AppFormField name="quantity" placeholder="Quantity" />

              <AppFormField name="category" placeholder="Category" />
              <AppFormField name="subCategory" placeholder="Sub Category" />
              <AppFormField name="brand" placeholder="Brand" />

              <View style={{ height: 20 }} />
              <SubmitButton title="Add Product" />
            </AppForm>
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.medium,
    fontSize: 24,
    textAlign: "center",
  },
});
