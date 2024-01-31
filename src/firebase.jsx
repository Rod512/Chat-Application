
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDhm2nFmAPuNYO_qV3e955bTAGD9GNkN-g",
  authDomain: "chatapp-57a9f.firebaseapp.com",
  projectId: "chatapp-57a9f",
  storageBucket: "chatapp-57a9f.appspot.com",
  messagingSenderId: "489541388205",
  appId: "1:489541388205:web:d2c61f02973f6138f64324"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
