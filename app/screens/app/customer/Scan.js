import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import { COLORS, FONTS } from "../../../constants/theme";
import AppButton from "../../../components/AppButton";

const Scan = ({ navigation }) => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(true);
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setId(data);
    console.log("The id is ", id);
    if (data) {
      console.log("The data is ", data);
    }
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  return (
    <AppScreen>
      <AppHeader isGoBack onPress={() => navigation.goBack()} />

      {scanned && (
        <View style={styles.absolute}>
          <Text style={styles.absoluteInstructionGreen}>
            The QR code has been scanned successfully
          </Text>
        </View>
      )}

      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ flex: 1, borderRadius: 30 }}
        />
      )}

      {!scanned && (
        <View style={styles.absolute}>
          <Text style={styles.absoluteInstruction}>
            Keep the camera pointing towards the code for its correct reading
          </Text>
        </View>
      )}
      {scanned && (
        <View style={{ marginTop: 35 }}>
          <>
            <View style={styles.mainQrCode}>
              <View style={styles.qrCodeIcon}>
                <Image
                  resizeMode="contain"
                  source={require("../../../../assets/icons/qrcode.png")}
                  style={styles.qrCodeIcon}
                />
              </View>
            </View>
            <View style={styles.btnContainer}>
              <AppButton
                title="Confirm"
                style={{ backgroundColor: COLORS.success }}
                onPress={() => navigation.navigate("sparked")}
              />
              <AppButton
                title="Re-Scan"
                style={{ backgroundColor: COLORS.error }}
                textStyle={{ color: COLORS.white }}
                onPress={() => setScanned(false)}
              />

              <AppButton
                title="Go Back"
                onPress={() => navigation.goBack()}
                color={COLORS.secondary}
              />
            </View>
          </>
        </View>
      )}
    </AppScreen>
  );
};

export default Scan;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    //want in the middle of the screen
    top: "83%",
    left: 0,
    right: 0,
    paddingHorizontal: 35,
    backgroundColor: COLORS.white,
    marginHorizontal: "10%",
    borderRadius: 20,
    padding: 12,
    justifyContent: "center",
  },
  absoluteInstruction: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    textAlign: "center",
    color: COLORS.error,
  },
  absoluteInstructionGreen: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    textAlign: "center",
    color: COLORS.success,
  },
  btnContainer: {
    marginHorizontal: "10%",
    marginVertical: 25,
  },
  qrCodeIcon: {
    width: 150,
    height: 150,
    backgroundColor: COLORS.white,
    alignSelf: "center",
  },
});
