import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import CustomerHomeCard from "../../../components/customer/CustomerHomeCard";
import AppHeader from "../../../components/AppHeader";
import { getDatabase, ref, get } from "firebase/database";

// different kind of livestock feed
const dairyProducts = ["milk", "curd", "butter", "cheese", "paneer"];
const feeds = [
  {
    id: 1,
    name: "milk",
  },
  {
    id: 2,
    name: "curd",
  },
  {
    id: 3,
    name: "butter",
  },
  {
    id: 4,
    name: "cheese",
  },
  {
    id: 5,
    name: "paneer",
  }
];



const Dairy = ({ navigation }) => {

  const [products, setProduct] = React.useState([]);

  React.useEffect(()=>{

    
    const addProd = async () => {
      
      // Path in the database where you want to set the data
      const dataRef = ref(getDatabase(), `/users/Farm-Item`);
      const snapshot = await get(dataRef);
      
      if (snapshot.exists()) {
        const val = snapshot.val(); 
        // console.log(val)
        setProduct(val);
      } else {
        // Handle the case where the snapshot doesn't exist or is empty
        setProduct([]);
      }
  
    }
  
    addProd()

    // console.log("adsa",products)
  
  }, [])

  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />
          <View style={styles.formContainer}>
            <Text style={styles.title}>Livestock Pro's Feed Store</Text>

            <CustomerHomeCard
              source={require("../../../../assets/icons/cow.png")}
              title="Milk"
              marginVertical
              onPress={() => navigation.navigate("sItemListings",{data: products["Milk"]})}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/curd.png")}
              title="Curd"
              marginVertical
              onPress={() => navigation.navigate("sItemListings",{data: products["Curd"]})}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/butter.png")}
              title="Butter"
              marginVertical
              onPress={() => navigation.navigate("sItemListings",{data: products["Butter"]})}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/cheese.png")}
              title="Cheese"
              marginVertical
              onPress={() => navigation.navigate("sItemListings",{data: products["Cheese"]})}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/paneer.png")}
              title="Paneer"
              marginVertical
              onPress={() => navigation.navigate("sItemListings",{data: products["Paneer"]})}
            />
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default Dairy;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#4a4a4a",
    marginTop: 5,
    marginBottom: 20,
    textAlign: "center",
  },
});

