// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD7pwDUG-WvfaDivVPVM9WyLORa5-InuPE",
  authDomain: "challange-c0e2b.firebaseapp.com",
  projectId: "challange-c0e2b",
  storageBucket: "challange-c0e2b.appspot.com",
  messagingSenderId: "973265102142",
  appId: "1:973265102142:web:1597e6e8f5c26fbbb8f86f",
  measurementId: "G-WR4M8ZYM1C",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
