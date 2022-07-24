import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "store-11fdf.firebaseapp.com",
  projectId: "store-11fdf",
  storageBucket: "store-11fdf.appspot.com",
  messagingSenderId: "1098433821088",
  appId: "1:1098433821088:web:c5aaa08886cea422f00cc5",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserFromGoogleAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const getUserDoc = await getDoc(userDocRef);

  if (!getUserDoc.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};
