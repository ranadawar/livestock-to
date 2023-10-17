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
          <Text style={styles.title}>Livestock Pro!</Text>

          <View style={styles.cardsContainer}>
            <CustomerHomeCard
              title="Dairy Products"
              source={require("../../../../assets/icons/dairy.png")}
              mRight={10}
              onPress={() => navigation.navigate("sdairy")}
            />
            <CustomerHomeCard
              title="Feed Store"
              source={require("../../../../assets/icons/feed.png")}
              mLeft={10}
              onPress={() => navigation.navigate("sfeed")}
            />
          </View>
          <View style={styles.cardsContainer}>
            <CustomerHomeCard
              title="Veterinary Doctor"
              source={require("../../../../assets/icons/vet.png")}
              mRight={10}
              onPress={() => navigation.navigate("svet")}
            />
            <CustomerHomeCard
              title="Medical Store"
              source={require("../../../../assets/icons/med.png")}
              mLeft={10}
              onPress={() => navigation.navigate("smedical")}
            />
          </View>
          <View style={styles.cardsContainer}>
            <CustomerHomeCard
              title="Verify Products"
              source={require("../../../../assets/icons/qrcode.png")}
              mRight={10}
              onPress={() => navigation.navigate("sscan")}
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
