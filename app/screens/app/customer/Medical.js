import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert, TextInput
} from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import { getDatabase, ref, get, set } from "firebase/database";
import { COLORS, FONTS } from "../../../constants/theme";
import { StripeProvider } from "@stripe/stripe-react-native";
import PaymentScreen from "../../../components/PaymentScreen";
import * as SecureStore from 'expo-secure-store';
//live stock medicine products dummy data

const Medical = ({ navigation }) => {
  
  const [products, setProduct] = React.useState([]);
  const [isFocused, setIsFocused] = React.useState(false);
  const [search, setSearch] = React.useState('')
  const [lastSearch, setLastSearch] = React.useState('');
  const [recommendations, setRecommendations] = React.useState([]);


  const handleFocus = () => {
    setIsFocused(true);
};

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleBuy = async (uid, price) => {
    
    const storedValueString = await SecureStore.getItemAsync("data");
    const value = JSON.parse(storedValueString || '{}');

    const dataRef = ref(getDatabase(), `/users/${uid}/Item-Sold`);
    const snapshot = await get(dataRef);
    const val = snapshot.val();

    

    const date = new Date();
    const currentTime = date.getTime();
    const itemSold = {
      date: val && val.date ? [...val.date, currentTime] : [currentTime],
      price: val && val.price ? [...val.price, price] : [price],
    };
    
    console.log("kkkkk",val)
    await set(dataRef, itemSold);


    // const dataRef1 = ref(getDatabase(), `/users/Medical-Item`);
    // const snapshot1 = await get(dataRef1);
    // const val1 = snapshot1.val();   

    // const removeData = val1.filter((item)=>{
    //   if (item.id === id){
    //     ("hhh")
    //     return false
    //   }
    //   return true
    // })


    // await set(dataRef1, removeData); // Push the new object directly to Firebase

    // Alert.alert("Sold...")

  }

  const handleSearch = async (text) => {
    setSearch(text);

    try {
      // Fetch existing search history
      const searchHistory = await SecureStore.getItemAsync('searchHistory');
      const parsedHistory = searchHistory ? JSON.parse(searchHistory) : [];

      // Append new search text to the list
      const updatedHistory = [...parsedHistory, text];

      // Save the updated search history list to SecureStore
      await SecureStore.setItemAsync('searchHistory', JSON.stringify(updatedHistory));
      ('Search item stored successfully:', text);

      
    } catch (error) {
      console.error('Error storing search item:', error);
    }
  };

  React.useEffect(() => {

    const addProd = async () => {
      
      // Path in the database where you want to set the data
      const dataRef = ref(getDatabase(), `/users/Medical-Item`);
      const snapshot = await get(dataRef);
      
      if (snapshot.exists()) {
        const val = snapshot.val(); 
        setProduct(val);
      } else {
        // Handle the case where the snapshot doesn't exist or is empty
        setProduct([]);
      }
    }

    addProd()
    fetchSearchHistory();

  }, [])

  const fetchSearchHistory = async () => {
    try {
      const searchHistory = await SecureStore.getItemAsync('searchHistory');
      if (searchHistory) {
        const parsedHistory = JSON.parse(searchHistory);
        (parsedHistory)
        setRecommendations(parsedHistory);
      }
    } catch (error) {
      console.error('Error fetching search history:', error);
    }
  };

  
  const filteredRecommendations = recommendations.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <AppHeader isGoBack onPress={() => navigation.goBack()} />
        <View style={styles.innerContainer}>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:26, color: COLORS.primary, fontWeight:'bold'}}>Medical Store</Text>
          </View>
          
          {/* <View style={[styles.searchContainer('#F5F5F5','#DDE6ED'), isFocused && styles.focusedContainer]}> */}
            <TextInput
                style={[{color:"black", borderColor: "lightgray", borderWidth:1, borderRadius:12, paddingHorizontal:12},  isFocused && styles.focusedContainer]}
                placeholder= "Search Names"
                placeholderTextColor="gray"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleSearch}
            />
          {/* </View> */}
          {isFocused && (
            <View style={{ position: 'absolute', top: 50, width: '100%', backgroundColor: 'lightgray', zIndex: 1, borderBottomEndRadius: 12, borderBottomStartRadius: 12 }}>
              
            {/* Display filtered recommendations */}
              {filteredRecommendations.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => setSearch(item)} style={{ padding: 16 }}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                                  
                <View style={styles.card}> 
                  <View style={styles.innercard}>
                  <View style={{flex:1}} >
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.price}>Rs. {item.price}</Text>
                    <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>

                  <View style={styles.imageWraper}>
                    <Image source={ item.images ? { uri: item.images } : require("../../../../assets/images/item.jpg")} style={styles.image} />
                  </View>
                  
                  </View>
                  
                  <StripeProvider
                      publishableKey="pk_test_51IdYnDBHMKBszX1pBFaa67mnlpgrqh7Dw839OaPD429x69Ss3jdSEutSjOQdRmatWmdpGzYgD1TsVct4Y57tScap00kD1Hxezb"
                      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
                    >
                      <PaymentScreen amount={item.price} onPress={()=> handleBuy(item.uid, item.price)} />
                  </StripeProvider>

                  {/* <TouchableOpacity onPress={()=> handleBuy(item.uid, item.price)} style={styles.buyNow}>
                    <Text style={styles.buyText}>Buy Now</Text>
                  </TouchableOpacity> */}
              </View>
              
              </View>
              
            )}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default Medical;

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
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems:'center'
  },
  searchContainer: (color,border) => {
    return{
        borderWidth : 1,
        borderColor : border,
        backgroundColor:color,
        padding:1,
        paddingHorizontal:8,
        fontSize:17,
        flex:1,
        borderRadius:18
}
},
  focusedContainer: {
    borderColor: COLORS.primary,
  },
  innercard: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection:'row',
    alignItems:'center'
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
    buyText: {
      color: COLORS.white,
      fontFamily: FONTS.medium,
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
