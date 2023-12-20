import { FlatList, Modal, StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import FeedListingCard from "../../../components/feed/FeedListingCard";
import { COLORS, FONTS } from "../../../constants/theme";
import * as SecureStore from 'expo-secure-store';
import LottieView from "lottie-react-native";
import { getDatabase, ref, get, set } from "firebase/database";

const DairyListing = ({ navigation, route }) => {

  const [loading, setLoading] = useState(true);
  const [listings] = useState(route.params.data || '');

  const handleBuy = async (id, price) => {
    
    const storedValueString = await SecureStore.getItemAsync("data");
    const value = JSON.parse(storedValueString || '{}');

    const dataRef = ref(getDatabase(), `/users/${value.uid}/Item-Sold`);
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


  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      <AppScreen>
      <View >
        <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Farm Listings</Text>
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
      <Modal visible={loading} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.modalText}>Loading Fresh Listings</Text>
          <LottieView
            source={require("../../../../assets/animations/ani.json")}
            autoPlay
            loop
            style={{
              width: 150,
              height: 150,
            }}
          />
        </View>
      </Modal>
    </>
  );
};

export default DairyListing;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: FONTS.medium,
    color: COLORS.primary,
    marginLeft: 20,
  },

  innerContainer: {
    flex: 1,
    marginTop: 20,
  },
  modal: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    color: COLORS.primary,
    marginBottom: 20,
  },
});
