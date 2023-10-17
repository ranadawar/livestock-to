import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import { COLORS, FONTS } from "../../../constants/theme";
import FeedListingCard from "../../../components/feed/FeedListingCard";

const dummyData = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    price: "100",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    price: "200",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    price: "300",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    title: "Title 4",
    description: "Description 4",
    price: "400",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "Title 5",
    description: "Description 5",
    price: "500",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    title: "Title 6",
    description: "Description 6",
    price: "600",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    title: "Title 7",
    description: "Description 7",
    price: "700",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    title: "Title 8",
    description: "Description 8",
    price: "800",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 9,
    title: "Title 9",
    description: "Description 9",
    price: "900",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 10,
    title: "Title 10",
    description: "Description 10",
    price: "1000",
    image: "https://picsum.photos/200/300",
  },
];
const FeedListings = ({ navigation }) => {
  const [listings, setListings] = useState(dummyData);
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Feed Listings</Text>
        <FlatList
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FeedListingCard
              title={item.title}
              price={item.price}
              owner="Ahsan Feeds"
              image={require("../../../../assets/icons/feeding.png")}
              onPress={() => Alert.alert("Getting Stripe Payment")}
            />
          )}
        />
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
