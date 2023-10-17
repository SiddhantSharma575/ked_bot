// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEB1xkwt_EvNaSAujtL-EFoC_bV0I1Wg8",
  authDomain: "chatbot-b8d2a.firebaseapp.com",
  databaseURL: "https://chatbot-b8d2a-default-rtdb.firebaseio.com",
  projectId: "chatbot-b8d2a",
  storageBucket: "chatbot-b8d2a.appspot.com",
  messagingSenderId: "249932646168",
  appId: "1:249932646168:web:985ac6eebd65050c59406d",
  measurementId: "G-QK4JHRLP8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)