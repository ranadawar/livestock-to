import { Alert, FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import AppScreen from "../../../components/AppScreen";
import Switch from "../../../components/Switch";
import FilterBtn from "../../../components/FilterBtn";
import { FONTS } from "../../../constants/theme";
import AppGradient from "../../../components/AppGradient";
import InboxCard from "../../../components/InboxCard";
import * as SecureStore from 'expo-secure-store';
import { getDatabase, ref, get, set } from "firebase/database";


const MessagesScreen = ({navigation}) => {
  const [messages, setMessage] = useState(false);

  React.useEffect(()=>{

    
    const addProd = async () => {
  
      // const value1 = JSON.stringify({"type": "Customer", "uid": "X1uDBkHpkrhZO0Cq0HAQyJhlfdw1"})
      // await SecureStore.setItemAsync("data", value1);

      const storedValueString = await SecureStore.getItemAsync("data");
      const value = JSON.parse(storedValueString || '{}');
      
      // ("aa",value)
      // Path in the database where you want to set the data
      const dataRef = ref(getDatabase(), `/users/${value.uid}/Accept-Set`);
      const snapshot = await get(dataRef);

      const dataRef1 = ref(getDatabase(), `/users/Doctors`);
      const snapshot1 = await get(dataRef1);
      // (snapshot)
      if (snapshot.exists()) {
        const val = snapshot.val(); 
        setMessage(val);
        
      } else {
        // Handle the case where the snapshot doesn't exist or is empty
        setMessage([]);
      }
  
    }
  
    addProd()
  
  }, [])

  const currentDate = new Date();

  const verify = (start, end, date, dta) => {  
    // Combine the first five elements into a string
    const dateString = date.split(' ').slice(0, 5).join(' ');

    
    const eventDate = new Date(dateString);
    const [startHour, startMinute] = start.split('.').map(Number);
    const [endHour, endMinute] = end.split('.').map(Number);



    eventDate.setHours(startHour, startMinute, 0, 0);
    const startDate = eventDate.getTime();

    eventDate.setHours(endHour, endMinute, 0, 0);
    const endDate = eventDate.getTime();

    // currentDate.setHours(currentDate.getHours() + 5);

    const currentTime = currentDate.getTime();

    if (currentTime >= startDate && currentTime <= endDate) {
      
      navigation.navigate("svetprofile",{data: dta})
    }
    else if(currentTime > endDate){
      Alert.alert("You are Late. Please Again Contact")
    }
    else {
      Alert.alert("Please wait for your turn.")
    }
  }


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
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => <InboxCard  name={item.data.name} date={item.date} start={item.start} end={item.end} onPress={()=> verify(item.start,item.end,item.date, item.data)} />}
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
