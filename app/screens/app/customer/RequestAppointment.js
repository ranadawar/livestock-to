import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import React, {useState} from "react";

import * as yup from "yup";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import FormImagePicker from "../../../components/form/FormImagePicker";
import { AppForm, AppFormField, SubmitButton, AppFormDropDown } from "../../../components/form";
import { FONTS } from "../../../constants/theme";
import * as SecureStore from 'expo-secure-store';
import { getDatabase, ref, set, get } from "firebase/database";

const CategoryList = [
  {
    id: 1,
    name: "Cattle",
  },
  {
    id: 2,
    name: "Poultry",
  },
  {
    id: 3,
    name: "Fish",
  },
  {
    id: 4,
    name: "Pet",
  },
  {
    id: 5,
    name: "Horse",
  },
  {
    id: 6,
    name: "Sheep",
  },
];

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

const RequestAppointment = ({ navigation, route }) => {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
  }

  let initialValues = {
    id : generateToken(3),
    name: name,
    description: description,
    age: quantity,
    images: image,
    category: category,
    more: subCategory
  };

  const addProd = async () => {
    
    const storedValueString = await SecureStore.getItemAsync("data");
    const value = JSON.parse(storedValueString || '{}');
    
    // Path in the database where you want to set the data
    const dataRef = ref(getDatabase(), `/users/${route.params.uid}/Appointment-Request`);

    // Retrieve existing data
    const snapshot = await get(dataRef);
    let existingData = snapshot.val() || []; // Default to an empty array if no data exists

    initialValues['uid'] = value.uid;
    initialValues['type'] = "Doctor";
    // Push the new object to the existing array
    existingData.push(initialValues);

    // Update the data at the specified path
    await set(dataRef, existingData); // Push the new object directly to Firebase

    Alert.alert("Product Added")
    navigation.navigate("shome")

}


  return (
    <AppScreen>
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppHeader isGoBack onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Add Details for Appointment</Text>
          <View style={styles.formContainer}>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={() => ("sub")}
            >
                <FormImagePicker name="images" onPress={setImage} />
                <Text >     Add Image</Text>
                {/* <AppFormDropDown
                  name="storeName"
                  data={Store}
                  placeholder="Select Store"
                  setValue = {setStoreIndex}
                /> */}
                <AppFormField name="name" placeholder="Name" onChangeText={setName} />
                <AppFormField name="age" placeholder="Age" onChangeText={setQuantity} />
                <AppFormField name="issue" placeholder="Issue" onChangeText={setDescription} />
                <AppFormDropDown
                  name="category"
                  data={CategoryList}
                  placeholder="Select Category"
                  setValue = {setCategory}
                />
                <AppFormField name="moreDetail" placeholder="More Detail" onChangeText={setSubCategory} />

              <View style={{ height: 20 }} />
              <SubmitButton title="Request" onPress={addProd} />
            </AppForm>
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default RequestAppointment;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.medium,
    fontSize: 24,
    textAlign: "center",
  },
});
