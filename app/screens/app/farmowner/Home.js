import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import CustomerHomeCard from "../../../components/customer/CustomerHomeCard";
import AppHeader from "../../../components/AppHeader";
import { COLORS, FONTS } from "../../../constants/theme";
import AppScreen from "../../../components/AppScreen";

const Home = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={{ flex: 1, padding: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppHeader />
          <Text style={styles.title}>Livestock Pro's Feed Store!</Text>

          <View style={styles.cardsContainer}>
            <CustomerHomeCard
              title="Set Feed Store"
              source={require("../../../../assets/icons/medicalstores.png")}
              mRight={10}
              onPress={() => navigation.navigate("ssetproductstore")}
            />
            <CustomerHomeCard
              title="Store Products"
              source={require("../../../../assets/icons/medicine.png")}
              mLeft={10}
              onPress={() => navigation.navigate("sstoreproducts")}
            />
          </View>
          <View style={styles.cardsContainer}>
            <CustomerHomeCard
              title="All Store Products"
              source={require("../../../../assets/icons/medicine.png")}
              mLeft={10}
              onPress={() => navigation.navigate("sallproduct")}
            />
            <CustomerHomeCard
              title="Store Products"
              source={require("../../../../assets/icons/medicine.png")}
              mLeft={10}
              onPress={() => navigation.navigate("sstoreproducts")}
            />
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,

    marginTop: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});
