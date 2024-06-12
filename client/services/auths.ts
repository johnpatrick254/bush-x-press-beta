import {initializeApp} from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword, getReactNativePersistence, initializeAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCoeb0z0BbCAfc0kMGD1lqhbl6P3TA6rt8",
  authDomain: "bush-xpress.firebaseapp.com",
  projectId: "bush-xpress",
  storageBucket: "bush-xpress.appspot.com",
  messagingSenderId: "393304015403",
  appId: "1:393304015403:web:f4a2c8c3a26ca75526a06e",
  measurementId: "G-G6V1RPE95T"
};
const app = initializeApp(firebaseConfig);
type signinType = {
    email: string
    password: string
}
export const auth = initializeAuth(app, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) });

export const signin = ({email, password}: signinType) => {
    
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        return user
      })
      .catch((error) => {
        return error
      });
}

export const signup = ({email, password}: any) => {
    return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;
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