import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDcUB0ZG5unFRdvsMY9qC7v2DnMqLsZeLE",
  authDomain: "chatapp-d61b5.firebaseapp.com",
  projectId: "chatapp-d61b5",
  storageBucket: "chatapp-d61b5.appspot.com",
  messagingSenderId: "58631046868",
  appId: "1:58631046868:web:3f962d5d1c97abcd769d41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()