// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY(),
  authDomain: "store-11fdf.firebaseapp.com",
  projectId: "store-11fdf",
  storageBucket: "store-11fdf.appspot.com",
  messagingSenderId: "1098433821088",
  appId: "1:1098433821088:web:c5aaa08886cea422f00cc5",
};

console.log(firebaseConfig.apiKey);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
