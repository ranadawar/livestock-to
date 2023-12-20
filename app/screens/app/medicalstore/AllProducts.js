import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert
} from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import * as SecureStore from 'expo-secure-store';
import { getDatabase, ref, get } from "firebase/database";
import { COLORS, FONTS } from "../../../constants/theme";

//live stock medicine products dummy data

const AllProducts = ({ navigation }) => {
  
  const [products, setProduct] = React.useState([]);
  
  React.useEffect(()=>{

    
    const addProd = async () => {

      const storedValueString = await SecureStore.getItemAsync("data");
      const value = JSON.parse(storedValueString || '{}');
      
      // Path in the database where you want to set the data
      const dataRef = ref(getDatabase(), `/users/${value.uid}/Medical-Store`);
      const snapshot = await get(dataRef);
      
      if (snapshot.exists()) {
        const val = snapshot.val();
        const valuesArray = Object.values(val || {}); // Ensure val is not null or undefined        
        
        const extractedProducts = valuesArray.map((storeObject) => {
          return storeObject.products.map((product) => {
            return product; // Extract product values here
          });
        });
     
        setProduct(extractedProducts.flat());
      } else {
        // Handle the case where the snapshot doesn't exist or is empty
        setProduct([]);
      }

    }

    addProd()

  }, [])
  
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <AppHeader isGoBack onPress={() => navigation.goBack()} />
        <View style={styles.innerContainer}>
          <Text>All Store Products</Text>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={{flex:1}} >
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.price}>Rs. {item.price}</Text>
                  <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>

                <View style={styles.imageWraper}>
                  <Image source={ item.images ? { uri: item.images } : require("../../../../assets/images/item.jpg")} style={styles.image} />
                </View>

                {/* <TouchableOpacity onPress={()=> Alert.alert("Wait")} style={styles.buyNow}>
                  <Text style={styles.buyText}>Buy Now</Text>
                </TouchableOpacity> */}
                
              </View>
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
  imageWraper: {
    width: 90,
    height: 90,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
      width: '100%',
      height: '100%',
  },
  buyNow: {
    flex: 1,
    minWidth: 100,
    marginRight: 15,
    backgroundColor: COLORS.primary,
    left: -30,

    marginLeft: 55,
    padding: 12,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection:'row',
    alignItems:'center'
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
