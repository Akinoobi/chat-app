// Import the functions you need from the SDKs you need
import { getApp,  getApps,  initializeApp } from "firebase/app";
import { getAuth, 
  signInWithEmailAndPassword, 
  browserSessionPersistence, 
  setPersistence,
  browserLocalPersistence,
  inMemoryPersistence,
  createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaLUy0IyD2d8BcHMIQh7wgMMHjPMwkTVg",
  authDomain: "chat-app-9d461.firebaseapp.com",
  projectId: "chat-app-9d461",
  storageBucket: "chat-app-9d461.appspot.com",
  messagingSenderId: "759965119030",
  appId: "1:759965119030:web:f05b828d7f63092fb99e97",
  measurementId: "G-Z0NRL2V9MW"
};

// Initialize Firebase

const firebaseApp =  initializeApp(firebaseConfig) ?? getApp();
const firebaseAppDB = getFirestore(firebaseApp);
const appAuth = getAuth(firebaseApp);
const firebaseStorage = getStorage(firebaseApp)
export { firebaseAppDB,
   appAuth,
   signInWithEmailAndPassword,
   browserSessionPersistence,
   setPersistence, 
   browserLocalPersistence, 
   inMemoryPersistence, 
   createUserWithEmailAndPassword,
   firebaseStorage
  }