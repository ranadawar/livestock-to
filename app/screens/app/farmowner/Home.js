import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import CustomerHomeCard from "../../../components/customer/CustomerHomeCard";
import AppHeader from "../../../components/AppHeader";
import { COLORS, FONTS } from "../../../constants/theme";
import AppScreen from "../../../components/AppScreen";

const Home = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppHeader />
          <Text style={styles.title}>Livestock Pro's Owner!</Text>

          <View style={styles.cardsContainer}>
            <CustomerHomeCard
              title="Set Owner"
              source={require("../../../../assets/icons/entrepreneur.png")}
              mRight={10}
              onPress={() => navigation.navigate("ssetowner")}
            />
             <CustomerHomeCard
              title="Store Products"
              source={require("../../../../assets/icons/food.png")}
              mLeft={10}
              onPress={() => navigation.navigate("saddproduct")}
            />
          </View>
          
          <View style={styles.cardsContainer}>
            <CustomerHomeCard
                title="Set Farm"
                source={require("../../../../assets/icons/business.png")}
                mRight={10}
                onPress={() => navigation.navigate("ssetstore")}
              />
          </View>
          <View style={styles.cardsContainer}>
            <CustomerHomeCard
              title="All Requests"
              source={require("../../../../assets/icons/personal.png")}
              mLeft={10}
              onPress={() => navigation.navigate("sallproducts",{type:"Owner"})}
            />
          </View>
          <View style={styles.cardsContainer}>
            <CustomerHomeCard
                title="Verify Products"
                source={require("../../../../assets/icons/qrcode.png")}
                mLeft={10}
                onPress={() => navigation.navigate("sallproductsverify")}
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
    marginHorizontal: 20,
    marginTop: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});
