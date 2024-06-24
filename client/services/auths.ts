import {initializeApp} from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword, getReactNativePersistence, initializeAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKETS,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
};

type  SigninType = {
    email: string
    password: string
}
type SignUpType = {
  firstName: string
  lastName: string
  email: string
  password: string
}

const app = initializeApp(firebaseConfig)

export const auth = initializeAuth(app, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) });

export const signIn = ({email, password}: SigninType) => {
    
    return signInWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        const userData = await AsyncStorage.getItem('userData')
        console.log(userData)
        const user = userCredential.user;
        console.log(user)
        return user
      })
      .catch((error) => {
        return error
      });
}

export const signUp = ({firstName, lastName, email, password,}: SignUpType) => {
    return createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {

    const user = userCredential.user;
    await AsyncStorage.setItem(
      'userData', JSON.stringify({firstName, lastName})
    );
    return user
  })
  .catch((error) => {
    return error
  });
}

export const signout = () => {
   signOut(auth).then(() => {
   })
}