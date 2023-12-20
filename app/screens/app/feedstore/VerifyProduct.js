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
import { QRCode } from "react-native-custom-qr-codes";
import { useFocusEffect } from "@react-navigation/native";
//live stock medicine products dummy data

const AllProductsVerify = ({ navigation }) => {
  
  const [products, setProduct] = React.useState([]);
  const [id, setId] = React.useState([]);
  const [uid, setUid] = React.useState([]);
  const [link, setLink] = React.useState(null);
  const [qrLink, setQrLink] = React.useState(null);

  React.useEffect(()=>{

    
    const addProd = async () => {

      const storedValueString = await SecureStore.getItemAsync("data");
      const value = JSON.parse(storedValueString || '{}');

      setUid(value.uid)
      
      // Path in the database where you want to set the data
      const dataRef = ref(getDatabase(), `/users/${value.uid}/Feed-Store`);
      const snapshot = await get(dataRef);
      
      if (snapshot.exists()) {
        const val = snapshot.val();
        const valuesArray = Object.values(val || {}); // Ensure val is not null or undefined        
        
        const extractedProducts = valuesArray.map((storeObject) => {
          return storeObject.products.map((product) => {
            return product; // Extract product values here
          });
        });

        // console.log(id)

        // setId(extractedProducts.flat()[0].id)

        setQrLink("https://live-stock-pro.web.app/Feed-Store/"+extractedProducts.flat()[0].id+"/hash/"+value.uid)
     
        setProduct(extractedProducts.flat());


      } else {
        // Handle the case where the snapshot doesn't exist or is empty
        setProduct([]);
      }

    }

    addProd()

    // console.log(id,uid, typeof link, link)

  }, [])


  const QRComponent = ({ link }) => {
    return (
      <View>
        {link ? (
          <QRCode
            content={link}
            size={150}
            ecl="H"
            // color={id}
          />
        ) : null}
      </View>
    );
  };

  

  // ... your existing code

  const handleLink = (id) => {
    setId("red");
    const newLink = `https://live-stock-pro.web.app/Feed-Store/${id}/hash/${uid}`;
    setQrLink(newLink);
  };

  
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <AppHeader isGoBack onPress={() => navigation.goBack()} />
        <View style={styles.innerContainer}>
          <View style={{alignItems:"center",justifyContent:'center'}}>
            <Text style={{fontSize:26,color:"#2d3b52"}}>Verify Products</Text>
            <View style={{marginVertical:15}}>
            <QRComponent link={qrLink} />
              
            </View>
            
          </View>
          
          
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{backgroundColor: "#fff", padding: 20, marginVertical: 10, borderRadius: 10, alignItems:'center'}}>
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

              </View>
                <TouchableOpacity onPress={()=> handleLink(item.id)} style={styles.buyNow}>
                  <Text style={styles.buyText}>Verify</Text>
                </TouchableOpacity>
              </View>
              
            )}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default AllProductsVerify;

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
  buyText: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
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
