
/*
import { initializeApp } from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
*/
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "proposal-d0c26.firebaseapp.com",
    projectId: "proposal-d0c26",
    storageBucket: "proposal-d0c26.appspot.com",
    messagingSenderId: "245805404453",
    appId: "1:245805404453:web:1063cd24d5ed613f408acc"
  
};



const app = initializeApp(firebaseConfig);
// Firestore Reference
const db = getFirestore();
// Authentication Refernece


export { app, db };