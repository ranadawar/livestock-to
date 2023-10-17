import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import { COLORS, FONTS } from "../../../constants/theme";
import ProfileCard from "../../../components/ProfileCard";
import AppHeader from "../../../components/AppHeader";

const vets = [
  {
    id: 1,
    name: "Dr. John Doe",
    address: "123, xyz street, abc city",
    phone: "1234567890",
    email: "",
  },
  //write 10 more objects from 2 to 11 like the above using copilot

  {
    id: 2,
    name: "Dr. John Doe",
    address: "123, xyz street, abc city",
    phone: "1234567890",
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 634,
  },
  {
    id: 64324,
  },
  {
    id: 6432,
  },
];

const Vet = ({ navigation }) => {
  return (
    <AppScreen>
      <AppHeader isGoBack onPress={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Vterinary Doctors</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={vets}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProfileCard onPress={() => navigation.navigate("svetprofile")} />
          )}
        />
      </View>
    </AppScreen>
  );
};

export default Vet;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.bold,
    fontSize: 25,
    textAlign: "center",
    color: COLORS.primary,
    marginBottom: 20,
  },
});
