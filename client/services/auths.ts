import { getApp} from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";

type signinType = {
    email: string
    password: string
}

const app = getApp()
export const auth = getAuth(app);

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