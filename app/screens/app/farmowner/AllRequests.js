import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Modal,
  Button,
  Alert
} from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import * as SecureStore from 'expo-secure-store';
import { getDatabase, ref, get, set } from "firebase/database";
import { SubmitButton, AppFormField } from "../../../components/form";
import RNDateTimePicker from '@react-native-community/datetimepicker';

//live stock medicine products dummy data

const AllRequests = ({ navigation, route }) => {
  
  const [requests, setRequests] = React.useState([]);
  
  React.useEffect(()=>{

    
    const addProd = async () => {

      const storedValueString = await SecureStore.getItemAsync("data");
      const value = JSON.parse(storedValueString || '{}');

      // Path in the database where you want to set the data
      const dataRef = ref(getDatabase(), `/users/${value.uid}/Appointment-Request`);
      const snapshot = await get(dataRef);
      
      if (snapshot.exists()) {
        const val = snapshot.val();     
        setRequests(val);
      } else {
        // Handle the case where the snapshot doesn't exist or is empty
        setRequests([]);
      }

    }

    addProd()

  }, [])

  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState();
  const [endTime, setEndTime] = React.useState();
  const [show, setShow] = React.useState(false);
  const [showTime, setShowTime] = React.useState(false);
  const [showTimeInputModal, setShowTimeInputModal] = React.useState(false);
  const [showEndTimeInputModal, setShowEndTimeInputModal] = React.useState(false);

  const handleTimeChange = (text) => {
    const regex = /^[0-9]{2}.[0-9]{2}$/;
    const isValid = regex.test(time);
    return isValid
  };
  const handleTimeEndChange = (text) => {
    const regex = /^[0-9]{2}.[0-9]{2}$/;
    const isValid = regex.test(endTime);
    return isValid
  };
  
  const handleOpenTimeInputModal = () => {
    setShowTimeInputModal(true);
  };

  const handleCloseTimeInputModal = () => {
    setShowTimeInputModal(false);
  };

  const handleOpenEndTimeInputModal = () => {
    setShowEndTimeInputModal(true);
  };

  const handleCloseEndTimeInputModal = () => {
    setShowEndTimeInputModal(false);
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    ("aaaa",currentDate)
    if (Platform.OS === 'ios') {
      setShow(false); // On iOS, the picker is always shown
    } else {
      setShow(false); // On Android, hide the picker on any change
    }
    ("aaaa",String(currentDate))
    const dateString = currentDate.split("T")[0];
    (dateString)
    
    setDate(dateString);
  };

  const showPicker = () => {
    setShow(true);
    setShowTime(true)
  };

  const initialvalues = {
    start: time,
    end: endTime,
    date: String(date)
  };

  const acceptAppoint = async () => {

    const storedValueString = await SecureStore.getItemAsync("data");
    const myid = JSON.parse(storedValueString || '{}');
    

    const value = requests[0].uid;
  
    // Path in the database where you want to set the data
    const dataRef = ref(getDatabase(), `/users/${value}/Accept-Set`);

    const snapshot = await get(dataRef);
    
    let existingData = snapshot.val() || []; // Default to an empty array if no data 
    initialvalues['type'] = "Farm Owner"

    const dataOwner = ref(getDatabase(), `/users/Owner`);
    const snapshotOwner = await get(dataOwner);
      
      if (snapshotOwner.exists()) {
        const val = snapshotOwner.val(); 
        const result = val.filter((item)=>{
          if (item.uid === myid.uid)
          {
            return item
          }
            return false
        })
        initialvalues['data'] = result[0]
      }


    existingData.push(initialvalues);

    // Update the data at the specified path
    await set(dataRef, existingData); // Push the new object directly to Firebase

    Alert.alert("Accepted...")
    navigation.navigate("shome")




}

  
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <AppHeader isGoBack onPress={() => navigation.goBack()} />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>All Requests</Text>
          <FlatList
            data={requests}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              item.type === route.params.type ? (
                <View style={{alignItems:'center',backgroundColor:'#fffefc',borderRadius:10, marginBottom:'5%'}}>
                  <TouchableOpacity style={styles.card}>
                  <View style={{flex:1}} >
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.quantity}>Age: {item.age}</Text>
                    <Text style={styles.price}>Category: {item.category.name}</Text>
                    <Text style={styles.description}>Issue: {item.description}</Text>
                    <Text style={styles.description}>More Info: {item.more}</Text>
                  </View>

                  <View style={styles.imageWraper}>
                    <Image source={ item.images ? { uri: item.images } : require("../../../../assets/images/item.jpg")} style={styles.image} />
                  </View>
                  
                </TouchableOpacity>
                  
                <View>
                  <Button title="Set Start Time" onPress={handleOpenTimeInputModal} />
                    <Modal visible={showTimeInputModal} animationType="slide" transparent={true} >
                      <View style={{flex:1,alignItems:'center',justifyContent:'center', marginTop:22}}>
                        <View style={{
                            margin: 20,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            padding: 35,
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                          }}>
                          <View>
                            <TextInput
                            name="setTime"
                            placeholder="00:00"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="numeric"
                            onChangeText={setTime}

                              />
                          </View>
                          <View  style={{marginTop:12,justifyContent:'space-between'}}>
                            <Button title="Set" 
                            onPress={() => 
                              {
                                if (handleTimeChange()){
                                  handleCloseTimeInputModal()
                                }
                                else{
                                  Alert.alert("Add Valid Time")
                                }
                              }
                              } />
                            <View style={{marginTop:10}} />
                            <Button title="Cancel"                           
                              onPress={() => { 
                                setTime('')
                                handleCloseTimeInputModal()}} />
                          </View>
                      </View>
                        
                    </View>
                  </Modal>
                </View>

                <View style={{height:10}} />
      
                <View>
                  <Button title="Set End Time" onPress={handleOpenEndTimeInputModal} />
                    <Modal visible={showEndTimeInputModal} animationType="slide" transparent={true} >
                      <View style={{flex:1,alignItems:'center',justifyContent:'center', marginTop:22}}>
                        <View style={{
                            margin: 20,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            padding: 35,
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                          }}>
                          <View>
                            <TextInput
                            name="setEndTime"
                            placeholder="00:00"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="numeric"
                            onChangeText={setEndTime}

                              />
                          </View>
                          <View  style={{marginTop:12,justifyContent:'space-between'}}>
                            <Button title="Set" 
                            onPress={() => 
                              {
                                if (handleTimeEndChange()){
                                  handleCloseEndTimeInputModal()
                                }
                                else{
                                  Alert.alert("Add Valid Time")
                                }
                              }
                              } />
                            <View style={{marginTop:10}} />
                            <Button title="Cancel" 
                            onPress={() => { 
                              setEndTime('')
                              handleCloseEndTimeInputModal()}}   
                              />
                          </View>
                      </View>
                        
                    </View>
                  </Modal>
                </View>

                <View style={{height:10}} />
                
                <Button title="Set Date" onPress={showPicker} />
                {show && (
                  <View>
                    <RNDateTimePicker
                      value={date}
                      mode="date" // You can change this to 'date' or 'time' based on your needs
                      is24Hour={true}
                      display="default"
                      onChange={onChangeDate}
                    />
                  </View>
                )}

                <View style={{height:10}} />

                <TouchableOpacity onPress={acceptAppoint} style={{ marginBottom:20,backgroundColor:'lightblue',width:"40%",padding:'3%',alignItems:'center',justifyContent:'center',borderRadius:15}} >
                  <Text>Accept Request</Text>
                </TouchableOpacity>
                </View>
              ) : null
              
              
            )}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default AllRequests;

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
    // backgroundColor: "#fff",
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
