import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import { COLORS, FONTS } from "../../../constants/theme";
import ProfileCard from "../../../components/ProfileCard";
import AppHeader from "../../../components/AppHeader";
import { getDatabase, ref, get } from "firebase/database";

const Vet = ({ navigation,route }) => {

  const [vets, setVet] = React.useState('')


  React.useEffect(()=>{

    
    const addProd = async () => {
      let dataRef;
      // Path in the database where you want to set the data
      if (route.params.data === "Doctor"){
        dataRef = ref(getDatabase(), `/users/Doctors`);
      }
      else{
        dataRef = ref(getDatabase(), `/users/Owner`);
      }

      const snapshot = await get(dataRef);
      
      if (snapshot.exists()) {
        const val = snapshot.val(); 
        setVet(val);
      } else {
        // Handle the case where the snapshot doesn't exist or is empty
        setVet([]);
      }

    }

    addProd()

  }, [])


  return (
    <AppScreen>
      <AppHeader isGoBack onPress={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Vterinary {route.params.data}</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={vets}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProfileCard name = {item.name} imagePerson = {item.imagePerson} type = {route.params.data}  onPress={() => {route.params.data === "Doctor" ? navigation.navigate("sappoint") : navigation.navigate("sappointowner")}} />
          )}
        />
      </View>
    </AppScreen>
  );
};

export default Vet;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.bold,
    fontSize: 25,
    textAlign: "center",
    color: COLORS.primary,
    marginBottom: 20,
  },
});
