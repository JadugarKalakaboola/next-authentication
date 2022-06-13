import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBWd-XqTdjSSQ7mVVu0nyxZ2hfUddVlLfE",
  authDomain: "next-firebase-auth-747e1.firebaseapp.com",
  projectId: "next-firebase-auth-747e1",
  storageBucket: "next-firebase-auth-747e1.appspot.com",
  messagingSenderId: "976294398096",
  appId: "1:976294398096:web:b94637fbf6c3913b9af015"
};

export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
