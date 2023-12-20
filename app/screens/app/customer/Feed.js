import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import CustomerHomeCard from "../../../components/customer/CustomerHomeCard";
import AppHeader from "../../../components/AppHeader";
import { getDatabase, ref, get } from "firebase/database";

// different kind of livestock feed

const feeds = [
  {
    id: 1,
    name: "Cattle Feed",
  },
  {
    id: 2,
    name: "Poultry Feed",
  },
  {
    id: 3,
    name: "Fish Feed",
  },
  {
    id: 4,
    name: "Pet Food",
  },
  {
    id: 5,
    name: "Horse Feed",
  },

  {
    id: 7,
    name: "Sheep Feed",
  },
];



const Feed = ({ navigation }) => {
  const [products, setProduct] = React.useState([]);

  React.useEffect(()=>{

    
    const addProd = async () => {
      
      // Path in the database where you want to set the data
      const dataRef = ref(getDatabase(), `/users/Feed-Item`);
      const snapshot = await get(dataRef);
      
      if (snapshot.exists()) {
        const val = snapshot.val(); 
        (val)
        setProduct(val);
      } else {
        // Handle the case where the snapshot doesn't exist or is empty
        setProduct([]);
      }
  
    }
  
    addProd()
  
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
              title="Cattle Feed"
              marginVertical
              onPress={() => navigation.navigate("sfeedlistings",{data: products["Cattle Feed"]})}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/chicken.png")}
              title="Poultry Feed"
              marginVertical
              onPress={() => navigation.navigate("sfeedlistings",{data: products["Poultry Feed"]})}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/fish.png")}
              title="Fish Feed"
              marginVertical
              onPress={() => navigation.navigate("sfeedlistings",{data: products["Fish Feed"]})}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/petf.png")}
              title="Pet Food"
              marginVertical
              onPress={() => navigation.navigate("sfeedlistings",{data: products["Pet Food"]})}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/horse.png")}
              title="Horse Feed"
              marginVertical
              onPress={() => navigation.navigate("sfeedlistings",{data: products["Horse Feed"]})}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/sheep.png")}
              title="Sheep Feed"
              marginVertical
              onPress={() => navigation.navigate("sfeedlistings",{data: products["Sheep Feed"]})}
            />
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default Feed;

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
