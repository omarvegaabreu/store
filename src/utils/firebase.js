import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "store-11fdf.firebaseapp.com",
  projectId: "store-11fdf",
  storageBucket: "store-11fdf.appspot.com",
  messagingSenderId: "1098433821088",
  appId: "1:1098433821088:web:c5aaa08886cea422f00cc5",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const addCollectionAndDocuments = async (
  collectionKey,
  documentObject
) => {
  //create a collection
  const collectionRef = collection(db, collectionKey);
  //write method to bd pass reference to db to be used (will write batch of data)
  const batch = writeBatch(db);

  documentObject.forEach((object) => {
    //will pass reference to db to be used key=[collectionKey] value=[object.title]
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("batch commit done.");
};

export const getCategoriesAndDocuments = async () => {
  //get collection, pass db credentials and 'categories' is the collection you are retrieving
  const collectionRef = collection(db, "categories");
  //query is method to get collection in your db.
  const queryCollection = query(collectionRef);
  //waiting for collection from firebase
  const querySnapShot = await getDocs(queryCollection);

  //reduce to create object
  /**
   * {
   * items category:{
   *        title:'item title',
   *            items:[
   *                   {},
   *                    {},
   *                  ]
   *                }
   * }
   */

  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    console.log(docSnapShot);
    const { items, title } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  console.log("category map");
  return categoryMap;
};

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserFromGoogleAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const userSignOut = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);
