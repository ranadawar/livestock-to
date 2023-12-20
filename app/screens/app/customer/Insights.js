import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  useColorScheme,
  Modal
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ICard from './insightCard';
import AppHeader from "../../../components/AppHeader";
import * as SecureStore from 'expo-secure-store';
import { getDatabase, ref, get, set } from "firebase/database";
import { useFocusEffect } from '@react-navigation/native';

function Insights({navigation}) {

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

    const[rank, setRank]= useState(0);
    const[streak, setStreak] = useState(0);
    const[tap, setTap]= useState(0);
    const[tapCount, setTapCount]= useState(0);
    const[score, setScore] = useState(0);
    const[scoreCount, setScoreCount] = useState(0);
    const[connect, setConnect]= useState(0);
    const[connectCount, setConnectCount]= useState(0);
    const[ratio, setRatio] = useState(0);
    const[ratioCount, setRatioCount] = useState(0);
    const [desc, setDesc] = useState('')
    const [title, setTitle] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useFocusEffect(
      React.useCallback(() => {

        const addProd = async () => {
          
          const storedValueString = await SecureStore.getItemAsync("data");
          const value = JSON.parse(storedValueString || '{}');

          const dataRef = ref(getDatabase(), `/users/${value.uid}/Item-Sold`);
          const snapshot = await get(dataRef);
          const val = snapshot.val();
          
          if (snapshot.exists()) {
            const val = snapshot.val(); 

            const date = new Date();
            const currentTime = date.getTime();

            let priceByDate = [];

            // Day wise Sale Graph

            const today = new Date().toDateString(); // Get the current date string

            const currentDayTimestamps = val.date.filter((timestamp, i) => {
              const date = new Date(timestamp);
              if (date.toDateString() === today){
                priceByDate.push(parseInt(val.price[i]))
                return date.toDateString() === today;
              }
              return false
            });
            
            const sum = priceByDate.reduce((acc, currentValue) => acc + currentValue, 0);

            setTapCount(sum)
            setTap(priceByDate)



            // Products sale graph

            const dates = val.date.map((timestamp) => new Date(timestamp).toDateString());

            const prodCount = dates.reduce((acc, date) => {
              acc[date] = (acc[date] || 0) + 1;
              return acc;
            }, {});

            const lastSevenTimestamps30 = Object.values(prodCount).slice(-30); // Get the last seven timestamps

            const paddingCount30 = 30 - lastSevenTimestamps30.length;
            const paddedLastSevenTimestamps30 = lastSevenTimestamps30.concat(Array(paddingCount30).fill(0));


            const sumProduct = Object.values(prodCount).reduce((acc, currentValue) => acc + currentValue, 0);

            setScore(paddedLastSevenTimestamps30)
            setScoreCount(sumProduct)


            // Overall Sales Graph
            let overallSum = 0;
            for(let i=0; i<val.price.length; i++)
            {
              overallSum = overallSum + parseInt(val.price[i])
            }

            // Value set for month wise sale

            setConnect(val.price)
            setConnectCount(overallSum)


            // Week Wise product
            const date7 = val.date.map((timestamp) => new Date(timestamp).toDateString());

            const prodCount7 = date7.reduce((acc, date) => {
              acc[date] = (acc[date] || 0) + 1;
              return acc;
            }, {});

            const lastSevenTimestamps = Object.values(prodCount7).slice(-7); // Get the last seven timestamps

            const paddingCount7 = 7 - lastSevenTimestamps.length;
            const paddedLastSevenTimestamps7 = lastSevenTimestamps.concat(Array(paddingCount7).fill(0));

            let sum7 = 0;
            for(let i=0; i<lastSevenTimestamps.length; i++)
            {
          
              sum7 = sum7 + parseInt(lastSevenTimestamps[i])

            }

            setRatioCount(sum7)
            setRatio(paddedLastSevenTimestamps7);


            



          } else {
            // Handle the case where the snapshot doesn't exist or is empty
            // setProduct([]);
          }
        }

        addProd()

      }, [])
    )
    


  return (
    <SafeAreaView style={[styles.icontainer1, {backgroundColor: isDarkTheme ? '#080808' : 'white'},]}>
      {/* Header */}
      
      <View style={[styles.icontainer2, {backgroundColor: isDarkTheme ? '#080808' : 'white'},]}>
      <AppHeader isGoBack onPress={() => navigation.goBack()} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'pink',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: isDarkTheme ? 'white' : 'black',
              marginBottom: '4%',
            }}>
            Insights
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: 0.3,
              borderColor: '#999999',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              paddingHorizontal: '3%',
              paddingVertical: '1.5%',
              //   backgroundColor: 'green',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: isDarkTheme ? 'white' : 'black',
                marginRight: '4%',
              }}>
              Refresh
            </Text>
            <MaterialIcons name="refresh" size={25} color={isDarkTheme ? 'white' : 'black'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body Content */}

      <ScrollView>
        {/* Content 1 */}
        <View style={{padding: '6%'}}>
          <View style={[styles.icontainer5, {backgroundColor: isDarkTheme ? '#2C2C2C' : '#F2F3F5'}]}>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: isDarkTheme ? 'white' : 'black',
                }}>
                Total Revenue
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: isDarkTheme ? 'white' : 'black',
                }}>
                {connectCount}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: isDarkTheme ? 'white' : 'black',
                }}>
                Total number of Revenue {connectCount} {'\n'}Generated
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: isDarkTheme ? 'white' : 'black',
                }}>
                Total Products
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: isDarkTheme ? 'white' : 'black',
                }}>
                {scoreCount}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: isDarkTheme ? 'white' : 'black',
                }}>
                Number of Products {scoreCount} {'\n'}Sold
              </Text>
            </View>
          </View>
        </View>

        {/* Content 2 */}
        <View style={{backgroundColor: isDarkTheme ? '#474747': '#F2F3F5', paddingHorizontal: '5%', paddingVertical: '8%', marginTop: '3%'}}>
          

          <View style={{flexDirection: 'row'}}>
            <ICard title="Day wise Revenue" Count={tapCount} value={tap} desc={"The total number of Revenue Generated in each day"} />
            <ICard title="Product Sales" Count={scoreCount} value={score} desc={"The total number of Products Sold"} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <ICard title="Oveall Revenue" Count={connectCount} value={connect} desc={"Total Revenue Generated Till Now"}/>
            <ICard title="Week Wise Product" Count={ratioCount} value={ratio} desc={"Total Revenue Generated each Week"}/>
          </View>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icontainer1: {
    flex: 1,
    backgroundColor: '#080808',
  },
  icontainer2: {
    backgroundColor: '#080808',
    paddingHorizontal: '6%',
    justifyContent: 'space-around',
  },
  icontainer4: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  icontainer5: {
    flexDirection: 'row',
    paddingVertical: '6%',
    backgroundColor: '#2C2C2C',
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  icontainer6: {
    backgroundColor: '#404040',
    // paddingHorizontal: '3%',
    alignItems: 'center',
    width: '35%',
    borderRadius: 30,
    paddingVertical: '8%',
    position: 'absolute',
    top: -23,
    left: 140,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.8)', // Shadow color
    shadowOpacity: 0.6, // Shadow opacity
    shadowOffset: { width: 2, height: 2 }, // Shadow offset
    shadowRadius: 3,
    
  },
});

export default Insights;
