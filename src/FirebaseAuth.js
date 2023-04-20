
import {app} from "./Firebase.js"; 
//import { getAuth } from "firebase/auth";
import * as fireAuth from "firebase/auth"; 

const auth = fireAuth.getAuth(app);

//Create new user with email & password

const signUp = async (email,password) => {
  try {
    const userCredential = await fireAuth.createUserWithEmailAndPassword(auth, email, password);
    // Additional code to handle successful account creation
    return userCredential.user;
  } catch (error) {
    // Additional code to handle error
    throw error;
  }
}

//Sign in with an existing account

const signIn = async (email, password)=> {
  try {
    const userCredential = await fireAuth.signInWithEmailAndPassword(auth, email, password);
    // Additional code to handle successful account creation
    return userCredential.user;
  } catch (error) {
    // Additional code to handle error
    throw error;
  }


}






//Reset password email
const resetPassword = async (email) =>{
  fireAuth.sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}


export { signIn, signUp };