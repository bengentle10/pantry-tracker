// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvAcmtPjrlEOPnFZuVMu28ukBU2Hgzc-8",
  authDomain: "inventory-management-1d375.firebaseapp.com",
  projectId: "inventory-management-1d375",
  storageBucket: "inventory-management-1d375.appspot.com",
  messagingSenderId: "477870420712",
  appId: "1:477870420712:web:0f9b0182e36d1ef97b4f5d",
  measurementId: "G-0TSJ0VZ082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}