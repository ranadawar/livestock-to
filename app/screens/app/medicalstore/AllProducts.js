import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";

//live stock medicine products dummy data

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    quantity: 10,
    description: "Product 1 description",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    quantity: 20,
    description: "Product 2 description",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    quantity: 30,
    description: "Product 3 description",
  },
];

const AllProducts = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <AppHeader isGoBack onPress={() => navigation.goBack()} />
        <View style={styles.innerContainer}>
          <Text>All Store Products</Text>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.card}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.price}>Rs. {item.price}</Text>
                  <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  price: {
    fontSize: 16,
    color: "#000",
  },
  quantity: {
    fontSize: 16,
    color: "#000",
  },
  description: {
    fontSize: 16,
    color: "#000",
  },
});
