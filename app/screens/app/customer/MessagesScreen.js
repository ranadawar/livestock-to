import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import AppScreen from "../../../components/AppScreen";
import Switch from "../../../components/Switch";
import FilterBtn from "../../../components/FilterBtn";
import { FONTS } from "../../../constants/theme";
import AppGradient from "../../../components/AppGradient";
import InboxCard from "../../../components/InboxCard";

const messages = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const MessagesScreen = () => {
  const [active, setActive] = useState(false);
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Inbox</Text>
          <Image
            source={require("../../../../assets/icons/au.png")}
            resizeMode="contain"
            style={styles.bellIcon}
          />
        </View>

        <View style={styles.fourthMain}>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <InboxCard />}
          />
          <AppGradient />
        </View>
      </View>
    </AppScreen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  bellIcon: {
    width: 30,
    height: 30,
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  editIcon: {
    width: 30,
    height: 30,
  },
  editText: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    marginLeft: 10,
  },
  fourthMain: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  groupBy: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  headerTitle: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    paddingVertical: 20,
  },
  mainContainer: {
    flex: 1,
    paddingTop: 45,
  },
  secondRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  topContainer: {
    height: 240,
  },

  thirdRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
});
