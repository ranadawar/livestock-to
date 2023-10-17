import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import CustomerHomeCard from "../../../components/customer/CustomerHomeCard";
import AppHeader from "../../../components/AppHeader";

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
              onPress={() => navigation.navigate("sfeedlistings")}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/chicken.png")}
              title="Poultry Feed"
              marginVertical
              onPress={() => navigation.navigate("sfeedlistings")}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/fish.png")}
              title="Fish Feed"
              marginVertical
              onPress={() => navigation.navigate("sfeedlistings")}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/petf.png")}
              title="Pet Food"
              marginVertical
              onPress={() => navigation.navigate("sfeedlistings")}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/horse.png")}
              title="Horse Feed"
              marginVertical
              onPress={() => navigation.navigate("sfeedlistings")}
            />
            <CustomerHomeCard
              source={require("../../../../assets/icons/sheep.png")}
              title="Sheep Feed"
              marginVertical
              onPress={() => navigation.navigate("sfeedlistings")}
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
