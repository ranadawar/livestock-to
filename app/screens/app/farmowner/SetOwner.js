import { Alert, StyleSheet, Text, View, ScrollView } from "react-native";
import React, {useState} from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import { FONTS } from "../../../constants/theme";
import { getDatabase, ref, set, get } from "firebase/database";
import * as Yup from "yup";
import * as SecureStore from 'expo-secure-store';
import { AppForm, AppFormField, SubmitButton } from "../../../components/form";
import FormImagePicker from "../../../components/form/FormImagePicker";



const validationSchema = Yup.object().shape({
  storeName: Yup.string().required().label("Store Name"),
  storeAddress: Yup.string().required().label("Store Address"),
  storeContact: Yup.string().required().label("Store Contact"),
  storeEmail: Yup.string().required().label("Store Email"),
});

const SetOwner= ({ navigation }) => {

  const [storeName, setStoreName] = useState('');
  const [image, setImage] = useState('');
  const [storeAddress, setStoreAddress] = useState('');
  const [storeContact, setStoreContact] = useState('');
  const [storeEmail, setStoreEmail] = useState('');

  function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
  }

 
  const initialValues = {
    
    imagePerson: image,
    name: storeName,
    address: storeAddress,
    contact: storeContact,
    email: storeEmail,
  };

  const addStore = async () => {
    
    const storedValueString = await SecureStore.getItemAsync("data");
    const value = JSON.parse(storedValueString || '{}');

    // Path in the database where you want to set the data
    const dataRef = ref(getDatabase(), `/users/Owner`);
    const currentDate = new Date();
    
    const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., "Monday"
    const time = currentDate.toLocaleTimeString('en-US'); // e.g., "3:30:45 PM"
    const date = day + ' ' +time

    const snapshot = await get(dataRef);
    let existingData = snapshot.val() || []; // Default to an empty array if no data exists
    // ('Data',existingData)
    initialValues['id'] = Math.floor(Math.random() * 1000000000);
    initialValues['memberSince'] = date;
    initialValues['uid'] = value.uid;
    // Push the new object to the existing array
    existingData.push(initialValues);

    // Update the data at the specified path
    await set(dataRef, existingData); // Push the new object directly to Firebase

    Alert.alert("Details Added")
    navigation.navigate("shome")

}

  return (
    <AppScreen>
      <AppHeader isGoBack onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Set Your Detail</Text>
      <ScrollView style={styles.formContainer}>
        <AppForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => ("sub")}
        >
          <FormImagePicker name="images" onPress={setImage} />
          <AppFormField name="Name" placeholder="Name" onChangeText={setStoreName} />
          <AppFormField name="Address" placeholder="Address" onChangeText={setStoreAddress} />
          <AppFormField name="Contact" placeholder="Contact" onChangeText={setStoreContact} />
          <AppFormField name="Email" placeholder="Email" onChangeText={setStoreEmail} />

          <View style={{ height: 50 }} />
          <SubmitButton title="Set Detail" onPress={addStore} />
        </AppForm>
      </ScrollView>
    </AppScreen>
  );
};

export default SetOwner;

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
