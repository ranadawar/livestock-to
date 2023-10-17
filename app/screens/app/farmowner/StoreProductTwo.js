import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import DairyListingCard from "../../../components/customer/DairyListingCard";
import { COLORS, FONTS } from "../../../constants/theme";

import LottieView from "lottie-react-native";

const twentyDemoListings = [
  {
    id: 1,
    name: "1 Liter Milk",
    price: "Rs. 50",
    owner: "Ahsan Dairy",
  },
  {
    id: 2,
    name: "2 Liter Milk",
    price: "Rs. 100",
    owner: "Ahsan Dairy",
  },
  {
    id: 3,
    name: "1 Liter Milk",
    price: "Rs. 50",
  },
  {
    id: 4,
    name: "2 Liter Milk",
    price: "Rs. 100",
  },
  {
    id: 5,
    name: "1 Liter Milk",
    price: "Rs. 50",
  },
  {
    id: 6,
    name: "2 Liter Milk",
    price: "Rs. 100",
  },
  {
    id: 7,
    name: "1 Liter Milk",
    price: "Rs. 50",
  },
  {
    id: 8,
    name: "2 Liter Milk",
    price: "Rs. 100",
  },
  {
    id: 9,
    name: "1 Liter Milk",
    price: "Rs. 50",
  },
  {
    id: 10,
    name: "2 Liter Milk",
    price: "Rs. 100",
  },
  {
    id: 11,
    name: "1 Liter Milk",
    price: "Rs. 50",
  },
  {
    id: 12,
    name: "2 Liter Milk",
    price: "Rs. 100",
  },
  {
    id: 13,
    name: "1 Liter Milk",
    price: "Rs. 50",
  },
  {
    id: 14,
    name: "2 Liter Milk",
    price: "Rs. 100",
  },
  {
    id: 15,
    name: "1 Liter Milk",
    price: "Rs. 50",
  },
  {
    id: 16,
    name: "2 Liter Milk",
    price: "Rs. 100",
  },
  {
    id: 134,
    name: "1 Liter Milk",
    price: "Rs. 50",
  },
  {
    id: 432,
    name: "2 Liter Milk",
    price: "Rs. 100",
  },
  {
    id: 351,
    name: "1 Liter Milk",
    price: "Rs. 50",
  },
  {
    id: 6432,
    name: "2 Liter Milk",
    price: "Rs. 100",
  },
];

const StoreProductTwo = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const datag = route.params;

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      <AppScreen>
        <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />

        <Text style={styles.title}>Searching Your {datag} Listing</Text>

        <View style={styles.innerContainer}>
          <FlatList
            data={twentyDemoListings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <DairyListingCard
                price={item.price}
                title={item.name}
                owner={item.owner}
                hide
              />
            )}
          />
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

export default StoreProductTwo;

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
