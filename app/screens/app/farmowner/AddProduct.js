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
    name: "Milk",
  },
  {
    id: 2,
    name: "Curd",
  },
  {
    id: 3,
    name: "Butter",
  },
  {
    id: 4,
    name: "Cheese",
  },
  {
    id: 5,
    name: "Paneer",
  }
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

const AddProduct = ({ navigation }) => {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [Store, setStores] = React.useState({});
  const [index, setStoreIndex] = React.useState({})

  React.useEffect(()=>{
    const getStore = async () => {

      const storedValueString = await SecureStore.getItemAsync("data");
      const value = JSON.parse(storedValueString || '{}');
      
      // Path in the database where you want to set the data
      const dataRef = ref(getDatabase(), `/users/${value.uid}/Farm-Store`);
      const snapshot = await get(dataRef);
      
      if (snapshot.exists()) {
        const val = snapshot.val();
        const KeysArray = Object.keys(val || {}); // Ensure val is not null or undefined      
        const valuesArray = Object.values(val || {}); // Ensure val is not null or undefined

        (valuesArray)
        
        var storeArr = [];
        KeysArray.map((item, index)=>{
          var storeDic = {};
          (item,index, valuesArray[index].storeName)
          storeDic["index"] = item;
          storeDic["name"] = valuesArray[index].storeName;
          storeDic["id"] = parseInt(generateToken(7));

          storeArr.push(storeDic)
        })  

        (storeArr)
        setStores(storeArr);
      } else {
        // Handle the case where the snapshot doesn't exist or is empty
        setStores([]);
      }
    }
    getStore()
  }, [])

  function generateToken(length) {
    const characters = '0123456789';
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
    price: price,
    quantity: quantity,
    images: image,
    category: category,
    subCategory: subCategory,
    brand: brand,
  };

  const addProd = async () => {
    
    const storedValueString = await SecureStore.getItemAsync("data");
    const value = JSON.parse(storedValueString || '{}');
    
    // Path in the database where you want to set the data
    const dataRef = ref(getDatabase(), `/users/${value.uid}/Farm-Store/${index.index}/products`);

    // Retrieve existing data
    const snapshot = await get(dataRef);
    let existingData = snapshot.val() || []; // Default to an empty array if no data exists

    initialValues['store'] = index.name;

    // Push the new object to the existing array
    existingData.push(initialValues);

    // Update the data at the specified path
    await set(dataRef, existingData); // Push the new object directly to Firebase


    const dataRef1 = ref(getDatabase(), `/users/Farm-Item/${category.name}`);
    const snapshot1 = await get(dataRef);
    let existingData1 = snapshot1.val() || []; // Default to an empty array if no data exists

    initialValues['uid'] = index.uid;
    // Push the new object to the existing array
    existingData1.push(initialValues);

    // Update the data at the specified path
    await set(dataRef1, existingData1);

    Alert.alert("Product Added")
    navigation.navigate("shome")

}


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
              onSubmit={() => ("sub")}
            >
                <FormImagePicker name="images" onPress={setImage} />
                {/* <AppFormDropDown
                  name="storeName"
                  data={Store}
                  placeholder="Select Store"
                  setValue = {setStoreIndex}
                /> */}
                <AppFormField name="name" placeholder="Name" onChangeText={setName} />
                <AppFormField name="description" placeholder="Description" onChangeText={setDescription} />
                <AppFormField name="price" placeholder="Price" onChangeText={setPrice} />
                <AppFormField name="quantity" placeholder="Quantity" onChangeText={setQuantity} />
                <AppFormDropDown
                  name="category"
                  data={CategoryList}
                  placeholder="Select Category"
                  setValue = {setCategory}
                />
                <AppFormField name="subCategory" placeholder="Sub Category" onChangeText={setSubCategory} />
                <AppFormField name="brand" placeholder="Brand" onChangeText={setBrand} />

              <View style={{ height: 20 }} />
              <SubmitButton title="Add Product" onPress={addProd} />
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
