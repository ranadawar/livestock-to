import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1WUmrEjx2Lo2KDRvIexpHPTLuvgVZlPE",
  authDomain: "live-stock-pro.firebaseapp.com",
  projectId: "live-stock-pro",
  storageBucket: "live-stock-pro.appspot.com",
  messagingSenderId: "697624655842",
  appId: "1:697624655842:web:fe7d6427e941d3b5a56bbb",
  databaseURL: "https://live-stock-pro-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

// Accessing authentication and database services
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
const database = getDatabase(app);

export { auth, database};