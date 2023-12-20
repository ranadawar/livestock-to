import { CardField, useStripe } from '@stripe/stripe-react-native';
import React, {useState} from "react"
import {TouchableOpacity, Text, StyleSheet, Alert, View} from 'react-native'
import axios from "react-native-axios";
import { getDatabase, ref, get } from "firebase/database"
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from "../constants/theme";

export default function PaymentScreen(props) {

  const Navigation = useNavigation()
 
  const createPaymentIntent = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('http://16.171.162.205:6000/payment-sheet', data)
        .then(async (res) => {
            await resolve(res)
        }).catch(function (error) {
            reject(error)
        })
    })
}

  const { initPaymentSheet, presentPaymentSheet, confirmPaymentSheetPayment } = useStripe();

    const date = new Date()
    const nextYear = new Date(date);
    nextYear.setFullYear(date.getFullYear() + 1);
    const nextMonth = new Date(date);
    nextMonth.setMonth(date.getMonth() + 1);

  const fetchPaymentSheetParams = async () => {
    
    const response = await createPaymentIntent({'amount': 1000, 'currency': 'EUR'})
    
    const paymentIntent = response.data?.paymentIntent
    const ephemeralKey = response.data?.ephemeralKey
    const customer = response.data?.customer

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();
    
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Live Stock Pro",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: '',
      }
    });
  };

  React.useEffect(() => {
    initializePaymentSheet()
  }, [props.amount])
  

  const openPaymentSheet = async () => {
    
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(error.message);
    } 

    props.onPress()
  };

  return(
    <TouchableOpacity onPress={()=> {openPaymentSheet()}} style={styles.buyNow}>
        <Text style={styles.buyText}>Buy Now</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    
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

})