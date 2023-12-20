import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  useColorScheme,
  TouchableOpacity
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import InsightChart from './InsightCharts';


function ICard(props) {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
      setModalVisible(!isModalVisible);
  };

  console.log("props",props)

  return (
    <View
      style={{
        backgroundColor: isDarkTheme ? 'black' : 'white',
        width: '45%',
        borderRadius: 15,
        padding: '2%',
        marginHorizontal: '2%',
        marginVertical: '2%',
      }}>
        <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={{flex: 1,
            
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <TouchableOpacity style={{ alignSelf: 'center', width: '12%', height: '1%', backgroundColor: isDarkTheme ? '#F5F5F5' : 'black', borderRadius: 30, marginBottom: '3%'}} onPress={toggleModal}></TouchableOpacity>
        
        <View style={{ backgroundColor: isDarkTheme ? 'black': 'white', paddingHorizontal: '5%', height: '25%'}}>
          <Text style={{color: 'grey',marginVertical: '3%'}}>Insights</Text>
          <Text style={{fontWeight: 'bold', fontSize: 24, color: isDarkTheme ? 'white' : 'black'}}>{props.title}</Text>
          <Text style={{marginVertical: '3%', color: isDarkTheme ? 'white' : 'black'}}>{props.desc}</Text>
        </View>
        </View>
      </Modal>
      <View>
        <IonIcons
          name="information-circle-outline"
          color={isDarkTheme ? 'grey' : 'black'}
          size={22}
          style={{marginLeft: 8}}
          onPress={toggleModal}
        />
      </View>
      
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: isDarkTheme ? 'white' : 'black',
              // backgroundColor: 'pink',
              textAlign: 'center',
            }}>
            {props.Count}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: isDarkTheme ? 'white' : 'black',
            }}>
            {props.title}
          </Text>
        </View>
        {props.value.length > 0 ? (<InsightChart value={props.value} />) : (<View><Text>No Progress Today</Text></View>)}
  
      </View> 
     
    </View>
  );
}

export default ICard;