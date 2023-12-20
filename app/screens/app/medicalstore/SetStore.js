import { Alert, StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import { FONTS } from "../../../constants/theme";
import * as SecureStore from 'expo-secure-store';
import { getDatabase, ref, set, get } from "firebase/database";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../../../components/form";



const validationSchema = Yup.object().shape({
  storeName: Yup.string().required().label("Store Name"),
  storeAddress: Yup.string().required().label("Store Address"),
  storeContact: Yup.string().required().label("Store Contact"),
  storeEmail: Yup.string().required().label("Store Email"),
});

const SetStore = ({ navigation }) => {

  const [storeName, setStoreName] = useState('');
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
    storeName: storeName,
    storeAddress: storeAddress,
    storeContact: storeContact,
    storeEmail: storeEmail,
  };

  const addStore = async () => {
    ('Data',initialValues)


    const storedValueString = await SecureStore.getItemAsync("data");
    const value = JSON.parse(storedValueString || '{}');
    
    // Path in the database where you want to set the data
    const dataRef = ref(getDatabase(), `/users/${value.uid}/Medical-Store/${generateToken(6)}`);

    // Update the data at the specified path
    await set(dataRef, initialValues); // Push the new object directly to Firebase

    Alert.alert("Product Added")
    navigation.navigate("shome")

}

  return (
    <AppScreen>
      <AppHeader isGoBack onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Set Your Store</Text>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => ("sub")}
        >
          <AppFormField name="storeName" placeholder="Store Name" onChangeText={setStoreName} />
          <AppFormField name="storeAddress" placeholder="Store Address" onChangeText={setStoreAddress} />
          <AppFormField name="storeContact" placeholder="Store Contact" onChangeText={setStoreContact} />
          <AppFormField name="storeEmail" placeholder="Store Email" onChangeText={setStoreEmail} />

          <View style={{ height: 50 }} />
          <SubmitButton title="Set Store" onPress={addStore} />
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
