import { Image, Linking, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import { COLORS, FONTS } from "../../../constants/theme";
import LottieView from "lottie-react-native";
import VetContactCard from "../../../components/vet/VetContactCard";

const VetProfile = ({ navigation, route }) => {
  const [loading, setLoading] = React.useState(true);

  console.log(route.params.data)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  

  const onPressCall = () => {
    const url = `tel:${route.params.data.contact}`; //will be replaced with vet's number
    Linking.openURL(url);
  };
  const onPressEmail = () => {
    
    const url = `mailto:${route.params.data.email}`; // will be replaced with vet's email
    Linking.openURL(url);
    };

  const onPressChat = () => {
    navigation.navigate("svetchat",{uid:route.params.data.uid});
  };

  const initiateSkypeVideoCall = async () => {
    const skypeURL = `skype:${route.params.data.contact}?call&video=true`;
  
    const supported = await Linking.canOpenURL(skypeURL);
    if (supported) {
      await Linking.openURL(skypeURL);
    } else {
      console.error('Cannot initiate Skype video call.');
    }
  };

  return (
    <>
      <AppScreen>
        <View style={styles.mainContainer}>
          <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />

          <Image
            resizeMode="cover"
            style={styles.image}
            source={route.params.data.imagePerson ? route.params.data.imagePerson :  require("../../../../assets/images/vetdoc.jpg")}
          />
          <Text style={styles.name}>{route.params.data.name}</Text>

          <View style={styles.bottomContainer}>
            <VetContactCard onPress={onPressCall} />
            <VetContactCard
              title="Email the Veterinary"
              onPress={onPressEmail}
              source={require("../../../../assets/icons/gmail.png")}
            />
            <VetContactCard
              title="Chat with Veterinary"
              onPress={onPressChat}
              source={require("../../../../assets/icons/chat.png")}
            />
            <VetContactCard
              title="Video Call Veterinary"
              onPress={initiateSkypeVideoCall}
              source={require("../../../../assets/icons/videocall.png")}
            />
          </View>
        </View>
      </AppScreen>
      <Modal visible={loading} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.modalText}>Getting Vet's Data</Text>
          <LottieView
            source={require("../../../../assets/animations/vet.json")}
            autoPlay
            loop
            style={{
              width: 150,
              height: 150,
            }}
          />
        </View>
      </Modal>
    </>
  );
};

export default VetProfile;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
  },
  mainContainer: {
    flex: 1,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    textAlign: "center",
    marginTop: 10,
    color: COLORS.primary,
  },
  modal: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    color: COLORS.primary,
    marginBottom: 20,
  },
});
