import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
//import Header from '../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS, FONTS } from "../../../constants/theme";
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feather from 'react-native-vector-icons/Feather';
import AppHeader from '../../../components/AppHeader';
// import Footer from '../components/Footer';
// import Newtab from "../components/newbottomtab";

const {width, height} = Dimensions.get('window');

export default function Cart({navigation}) {

    const [text, setText] = useState(); // Set default value to '1'

    const handleTextChange = newText => {
      setText(newText);
    };

  const products = [
    {
      id: 1,
      name: 'Apple Ice School Water Bottle',
      price: 'Rs 350.00',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Boxing Gloves',
      price: 'Rs 1350.00',
      quantity: 1,
    },
  ];

  

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader />
      <ScrollView >

        <View style={{paddingHorizontal: wp('4%')}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: hp('4%'),
          }}>
          <Text
            style={{
              
              fontSize: hp('5%'),
              fontWeight: 400,
              color: COLORS.primary,
              fontFamily: FONTS.semiBold
            }}>
            Cart
          </Text>
        </View>

        {/* Products in Cart */}

        {products.map(product => (
          <React.Fragment key={product.id}>
            <View >
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Feather name="x" size={22} color="black" />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: hp('1.5%'),
                }}>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontFamily: FONTS.semiBold,
                    fontSize: hp('2.5%'),
                    fontWeight: 500,
                  }}>
                  Product
                </Text>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontFamily: FONTS.semiBold,
                    fontSize: hp('2.5%'),
                    fontWeight: 300,
                  }}>
                  {product.name}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: hp('1.5%'),
                }}>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontFamily: FONTS.semiBold,
                    fontSize: hp('2.5%'),
                    fontWeight: 500,
                  }}>
                  Price
                </Text>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontFamily: FONTS.medium,
                    fontSize: hp('2.5%'),
                    fontWeight: 300,
                  }}>
                  {product.price}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: hp('1.5%'),
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontFamily: FONTS.semiBold,
                    fontSize: hp('2.5%'),
                    fontWeight: 500,
                  }}>
                  Quantity
                </Text>
                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 1,
                    borderRadius: 20,
                    width: wp('25%'),
                    height: hp('6%'),
                    paddingHorizontal: wp('3%'),
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    style={{color: 'black', fontSize: hp('2%')}}
                    value={product.quantity.toString()}
                    onChangeText={handleTextChange}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: hp('1.5%'),
                }}>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontFamily: FONTS.semiBold,
                    fontSize: hp('2.5%'),
                    fontWeight: 500,
                  }}>
                  Subtotal:
                </Text>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontFamily: FONTS.medium,
                    fontSize: hp('2.5%'),
                    fontWeight: 300,
                  }}>
                  {product.price}
                </Text>
              </View>
              <View style={styles.horizontalline}></View>
            </View>
          </React.Fragment>
        ))}


        {/* Cart Total */}
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: hp('3.5%'),
              fontWeight: 400,
              marginTop: hp('4%'),
              //   marginBottom: hp('1%'),
            }}>
            Cart totals
          </Text>
          <View style={[styles.horizontalline, {marginVertical: hp('1%')}]}>
            <View
              style={[
                styles.horizontalline,
                {
                  borderBottomColor: 'blue',
                  marginVertical: 0,
                  width: wp('20%'),
                  borderBottomWidth: 2,
                },
              ]}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: hp('1%'),
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: hp('2%'),
                fontWeight: 500,
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: hp('2%'),
                fontWeight: 300,
              }}>
              Rs 1,700.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: hp('1%'),
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: hp('2%'),
                fontWeight: 500,
              }}>
              Total
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: hp('2%'),
                fontWeight: 500,
              }}>
              Rs 1,880.00
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 30,
              marginVertical: hp('1%'),
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: wp('5%'),
              backgroundColor: '#00ABC5',
            }}
            onPress={()=> navigation.navigate('Checkout')}
            >
            <Text
              style={{
                color: 'white',
                fontSize: hp('2%'),
                fontWeight: 500,
              }}>
              Proceed to checkout
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        {/* Footer */}



      </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  scrollViewContainer: {
    flexDirection: 'row',
  },
  horizontalline: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginVertical: hp('2.5%'),
  },
});
