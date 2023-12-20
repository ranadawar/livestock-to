import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import { COLORS, FONTS } from "../../../constants/theme";
import FeedListingCard from "../../../components/feed/FeedListingCard";
import * as SecureStore from 'expo-secure-store';
import { getDatabase, ref, get, set } from "firebase/database";

const FeedListings = ({ navigation, route }) => {

   const [listings] = useState(route.params.data || '');

   console.log("jjj",route.params.data)

  const handleBuy = async (uid, price) => {
    
    const storedValueString = await SecureStore.getItemAsync("data");
    const value = JSON.parse(storedValueString || '{}');

    const dataRef = ref(getDatabase(), `/users/${uid}/Item-Sold`);
    const snapshot = await get(dataRef);
    const val = snapshot.val();

    const date = new Date();
    const currentTime = date.getTime();
    const itemSold = {
      date: val && val.date ? [...val.date, currentTime] : [currentTime],
      price: val && val.price ? [...val.price, price] : [price],
    };

    await set(dataRef, itemSold);


    // const dataRef1 = ref(getDatabase(), `/users/Medical-Item`);
    // const snapshot1 = await get(dataRef1);
    // const val1 = snapshot1.val();   

    // const removeData = val1.filter((item)=>{
    //   if (item.id === id){
    //     ("hhh")
    //     return false
    //   }
    //   return true
    // })


    // await set(dataRef1, removeData); // Push the new object directly to Firebase

    // Alert.alert("Sold...")

  }

  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Feed Listings</Text>
        {listings ? 
        (
          <FlatList
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FeedListingCard
              title={item.name}
              price={item.price}
              owner={item.store}
              image={item.images || require("../../../../assets/icons/feeding.png" )}
              onPress={()=> handleBuy(item.id, item.price)}
            />
          )}
        />
        ) : 
        (
        <Text style={styles.title}>No Item</Text>
        )}
        
      </View>
    </AppScreen>
  );
};

export default FeedListings;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    textAlign: "center",
    color: COLORS.primary,
  },
});
