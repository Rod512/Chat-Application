import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcUB0ZG5unFRdvsMY9qC7v2DnMqLsZeLE",
  authDomain: "chatapp-d61b5.firebaseapp.com",
  projectId: "chatapp-d61b5",
  storageBucket: "chatapp-d61b5.appspot.com",
  messagingSenderId: "58631046868",
  appId: "1:58631046868:web:74a1198880c78be2769d41"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();