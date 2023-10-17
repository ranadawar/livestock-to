import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import { COLORS, FONTS } from "../../../constants/theme";

const dairyProducts = ["milk", "curd", "butter", "cheese", "paneer"];

const Dairy = ({ navigation }) => {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     axios.get('http://your-api-url/api/data')
  //       .then(response => {
  //         setData(response.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   }, []);

  return (
    <AppScreen>
      <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Please Select What Product You Want to Buy?
        </Text>

        <View style={styles.listContainer}>
          <FlatList
            data={dairyProducts}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("sItemListings", item)}
                style={styles.itemContainer}
              >
                <Text style={styles.listItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default Dairy;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontFamily: FONTS.medium,
    color: COLORS.primary,
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: COLORS.pureWhite,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});
